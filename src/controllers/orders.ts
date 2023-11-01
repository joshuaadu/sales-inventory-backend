import { ObjectId } from "mongodb";
import { NextFunction, Request, Response } from "express";
import { getDb } from "../models";

export const addOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { order } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("orders").insertOne(order);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const db = getDb();
    const result = await db.collection("orders").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getOrderById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .findOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const updateOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { order } = req.body;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .updateOne({ _id: new ObjectId(id) }, { $set: order });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteOrder = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("orders")
      .deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getOrdersByUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("orders").find({ user: user }).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getOrdersByStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const getOrdersByDate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date } = req.params;
  try {
    const db = getDb();
    const result = await db.collection("orders").find({ date: date }).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const getOrdersByProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const getOrdersByCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const getOrdersByPrice = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const getOrdersByQuantity = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const getOrdersByTotal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
