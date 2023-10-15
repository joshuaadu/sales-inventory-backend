import { ObjectId } from "mongodb";
import { getDb } from "../db/index.js";

export const addToCart = async (req, res, next) => {
  const { id } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("cart").insertOne({ id });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getCart = async (req, res, next) => {
  try {
    const db = getDb();
    const result = await db.collection("cart").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteFromCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("cart").deleteOne({ _id: ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
