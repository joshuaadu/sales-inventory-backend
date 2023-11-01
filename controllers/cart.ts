import { ObjectId } from "mongodb";
import { getDb } from "../model";
import { NextFunction, Request, Response } from "express";

export const addToCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("cart").insertOne({ id });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const db = getDb();
    const result = await db.collection("cart").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteFromCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("cart")
      .deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
