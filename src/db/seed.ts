import { reset, seed } from "drizzle-seed";
import { schema } from "./schema/index.ts";
import { db } from "./connection.ts";

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      questions: {
        count: 20,
      },
    },
  };
});

console.log("db seed");
