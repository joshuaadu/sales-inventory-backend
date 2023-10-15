const { ObjectId } = require("mongodb");
const { getDb } = require("../db/index.js");

exports.addOrder = async (req, res, next) => {
  const { order } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("orders").insertOne(order);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrders = async (req, res, next) => {
  try {
    const db = getDb();
    const result = await db.collection("orders").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrderById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("orders").findOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.updateOrder = async (req, res, next) => {
  const { id } = req.params;
  const { order } = req.body;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .updateOne({ _id: ObjectId(id) }, { $set: order });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .deleteOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByUser = async (req, res, next) => {
  const { user } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("orders").find({ user: user }).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByStatus = async (req, res, next) => {
  const { status } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .find({ status: status })
      .toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByDate = async (req, res, next) => {
  const { date } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("orders").find({ date: date }).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByProduct = async (req, res, next) => {
  const { product } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .find({ product: product })
      .toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByCategory = async (req, res, next) => {
  const { category } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .find({ category: category })
      .toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByPrice = async (req, res, next) => {
  const { price } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .find({ price: price })
      .toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByQuantity = async (req, res, next) => {
  const { quantity } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .find({ quantity: quantity })
      .toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getOrdersByTotal = async (req, res, next) => {
  const { total } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .find({ total: total })
      .toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
