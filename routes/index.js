import { Router } from "express";
import productsRouter from "./products.js";
import ordersRouter from "./orders.js";
import usersRouter from "./users.js";
import cartRouter from "./cart.js";
import swaggerRouter from "./swagger.js";

const router = Router();

// Swagger
router.use(swaggerRouter);
router.use(productsRouter);
// router.use(ordersRouter);
// router.use(usersRouter);
// router.use(cartRouter);

export default router;
