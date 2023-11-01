import express from "express";
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from "../controllers/users.ts";
// const express = require("express");
// const {
//   getUsers,
//   getUserById,
//   addUser,
//   updateUser,
//   deleteUser,
// } = require("../controllers/users.js");

const router = express.Router();

// Users
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", addUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
