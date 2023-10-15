const express = require("express");
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.js");

const router = express.Router();

// Products
router.get("/products", getProducts);
router.get("/products/:id", getProductById);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;
