import { ObjectId } from "mongodb";
import { getDb } from "../model";
import { NextFunction, Request, Response } from "express";

export const addUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { user } = req.body;
  try {
    const db = getDb();
    const result = await db.collection("users").insertOne(user);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const db = getDb();
    const result = await db.collection("users").find({}).toArray();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
export const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("users")
      .findOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { user } = req.body;
  try {
    const db = getDb();
    const result = await db
      .collection("users")
      .updateOne({ _id: new ObjectId(id) }, { $set: user });
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const db = getDb();
    const result = await db
      .collection("users")
      .deleteOne({ _id: new ObjectId(id) });
    res.json(result);
  } catch (err) {
    next(err);
  }
};
