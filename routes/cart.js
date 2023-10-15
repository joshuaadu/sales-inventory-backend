const express = require("express");
const {getCart, addToCart, deleteFromCart} = require("../controllers/cart.js");

const router = express.Router();

// Cart
router.get("/cart", getCart);
router.post("/cart", addToCart);
router.delete("/cart/:id", deleteFromCart);

module.exports = router;
