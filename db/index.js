import { MongoClient } from "mongodb";
import { mongo } from "../config/index.js";

let _db;

export const initDb = (callback) => {
  if (_db) {
    console.log("Db is already initialized!");
    return callback(null, _db);
  }
  MongoClient.connect(mongo.uri)
    .then((client) => {
      console.log(
        "Db initialized successfully",
        client.db().collection("products")
      );
      _db = client.db("sales-inventory");
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

export const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};
