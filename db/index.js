const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const { mongo } = require("../config/index.js");

// mongoose.connect(mongo.uri);

// mongoose.connection.on("connected", () => {
//   console.log("Mongoose is connected");
// });

let _db;

exports.initDb = (callback) => {
  if (_db) {
    console.log("Db is already initialized!");
    return callback(null, _db);
  }
  MongoClient.connect(mongo.uri)
    .then((client) => {
      // console.log(
      //   "Db initialized successfully",
      //   client.db().collection("products")
      // );
      _db = client.db("sales-inventory");
      // _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

exports.getDb = () => {
  if (!_db) {
    throw Error("Db not initialized");
  }
  return _db;
};
