const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require("mongodb");
const { readWritePrimary } = require("../../keys/keys.ts");
const uri = readWritePrimary;

export function Connect() {
  mongoose.connect(uri).then(
    () => {
      console.log("Database connection established!");
    },
    (err: any) => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );
}
