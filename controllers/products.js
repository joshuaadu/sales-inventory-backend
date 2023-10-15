const { ObjectId } = require("mongodb");
const { getDb } = require("../db/index.js");

exports.addProduct = async (req, res, next) => {
  const { product } = req.body;
  try {
    const db = getDb();
    console.log("Db", db);
    const result = await db.collection("products").insertOne(product);
    res.status(201).json(result.ops[0]); // 201 Created
    // res.json(result);
  } catch (err) {
    console.log(err);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const db = getDb();
    console.log("Db", db.collection);
    const result = await db.collection("products").find({}).toArray();
    res.status(200).json(result); // 200 OK
  } catch (err) {
    next(err);
  }
};

exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .findOne({ _id: ObjectId(id) });
    if (result) {
      res.status(200).json(result); // 200 OK
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    next(err);
  }
};

exports.updateProduct = async (req, res, next) => {
  const { id } = req.params;
  const { product } = req.body;
  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .updateOne({ _id: ObjectId(id) }, { $set: product });
    if (result.modifiedCount > 0) {
      res.status(200).json({ message: "Product updated successfully" }); // 200 OK
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    next(err);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .deleteOne({ _id: ObjectId(id) });
    if (result.deletedCount > 0) {
      res.status(204).end(); // 204 No Content
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    next(err);
  }
};
