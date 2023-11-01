import { Router } from "express";
import { getCart, addToCart, deleteFromCart } from "../controllers/cart";

const router = Router();

// Cart
router.get("/cart", getCart);
router.post("/cart", addToCart);
router.delete("/cart/:id", deleteFromCart);

export default router;
