import { Router } from "express";
import { param } from "express-validator";
import { orderValidationRules, validate } from "../lib/validator";
import {
  getOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders";

const router = Router();

// Orders
router.get("/orders", getOrders);
router.get(
  "/orders/:id",
  param("id", "Order id is required!").trim().notEmpty().isString(),
  validate,
  getOrderById
);
router.post("/orders", orderValidationRules, validate, addOrder);
router.put(
  "/orders/:id",
  param("id", "Order id is required!").trim().notEmpty().isString(),
  orderValidationRules,
  validate,
  updateOrder
);
router.delete(
  "/orders/:id",
  param("id", "Order id is required!").trim().notEmpty().isString(),
  validate,
  deleteOrder
);

export default router;
