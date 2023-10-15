import { Router } from "express";
import {
  getOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.js";

const router = Router();

// Orders
router.get("/orders", getOrders);
router.get("/orders/:id", getOrderById);
router.post("/orders", addOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);

export default router;
