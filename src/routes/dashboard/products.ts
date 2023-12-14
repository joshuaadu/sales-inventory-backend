import { Router } from "express";
import { getProducts, addProduct } from "../../controllers/dashboard/products";

const router = Router();

router.get("/products", getProducts);
router.post("/products", addProduct);

export default router;
