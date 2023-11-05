import { Router } from "express";
import { param } from "express-validator";
import { productValidationRules, validate } from "../lib/validator";
import {
  getProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products";
const router = Router();

// Products
router.get("/products", getProducts);
router.get(
  "/products/:id",
  param("id", "Product id is required!").trim().notEmpty().isString(),
  validate,
  getProductById,
);
router.post("/products", productValidationRules(), validate, addProduct);
router.put(
  "/products/:id",
  param("id", "Product id is required!").trim().notEmpty().isString(),
  productValidationRules(),
  validate,
  updateProduct,
);
router.delete(
  "/products/:id",
  param("id", "Product id is required!").trim().notEmpty().isString(),
  validate,
  deleteProduct,
);
export default router;
