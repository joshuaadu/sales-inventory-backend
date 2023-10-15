const { ObjectId } = require("mongodb");
const { getDb } = require("../db/index.js");

exports.addProduct = async (req, res, next) => {
  try {
    const db = getDb();
    console.log("Db", db);
    const result = await db.collection("products").insertOne(req.body);
    res.status(201).json({ id: result.insertedId }); // 201 Created
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
  const productID = new ObjectId(id);
  try {
    const db = getDb();
    const result = await db.collection("products").findOne({ _id: productID });
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
  const productID = new ObjectId(id);
  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .updateOne({ _id: productID }, { $set: req.body });
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
  const productID = new ObjectId(id);

  try {
    const db = getDb();
    const result = await db
      .collection("products")
      .deleteOne({ _id: productID });
    if (result.deletedCount > 0) {
      res.status(204).end(); // 204 No Content
    } else {
      res.status(404).json({ message: "Product not found" }); // 404 Not Found
    }
  } catch (err) {
    next(err);
  }
};
