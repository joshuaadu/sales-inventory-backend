import { MongoClient, Db, MongoError } from "mongodb";
import { mongo as mongoConfig } from "../config";

// mongoose.connect(mongo.uri);

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose is connected");
// });

let _db: Db;

export const initDb = (
  callback: (err: MongoError | null, _db: Db | null) => void,
) => {
  if (_db) {
    console.log("Db is already initialized!");
    return callback(null, _db);
  }
  MongoClient.connect(mongoConfig.uri)
    .then((client) => {
      // console.log(
      //   "Db initialized successfully",
      //   client.db().collection("products")
      // );
      _db = client.db("sales-inventory");
      // _db = client;
      callback(null, _db);
    })
    .catch((err: MongoError) => {
      callback(err, null);
    });
};

export const getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};
