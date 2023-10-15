const ObjectId = require("mongodb").ObjectId;
const { getDb } = require("../db/index.js");

exports.addToCart = async (req, res, next) => {
  const { id } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("cart").insertOne({ id });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getCart = async (req, res, next) => {
  try {
    const db = getDb();
    const result = await db.collection("cart").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteFromCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("cart").deleteOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
