const { ObjectId } = require("mongodb");
const { getDb } = require("../db/index.js");

exports.addUser = async (req, res, next) => {
  const { user } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("users").insertOne(user);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const db = getDb();
    const result = await db.collection("users").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("users").findOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  const { id } = req.params;
  const { user } = req.body;
  try {
    const db = getDb();
    const result = await db
      .collection("users")
      .updateOne({ _id: ObjectId(id) }, { $set: user });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("users")
      .deleteOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
