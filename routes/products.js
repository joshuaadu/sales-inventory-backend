const express = require("express");
const { param } = require("express-validator");
const {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/products.js");
const { productValidationRules, validate } = require("../lib/validator.js");

const router = express.Router();

// Products
router.get("/products", getProducts);
router.get(
  "/products/:id",
  param("id", "Product id is required!").trim().notEmpty().isString(),
  validate,
  getProductById
);
router.post("/products", productValidationRules(), validate, addProduct);
router.put(
  "/products/:id",
  param("id", "Product id is required!").trim().notEmpty().isString(),
  productValidationRules(),
  validate,
  updateProduct
);
router.delete(
  "/products/:id",
  param("id", "Product id is required!").trim().notEmpty().isString(),
  validate,
  deleteProduct
);

module.exports = router;
