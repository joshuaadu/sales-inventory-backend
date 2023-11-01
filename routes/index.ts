import { Router } from "express";
import productsRouter from "./products.ts";
import ordersRouter from "./orders.ts";
import usersRouter from "./users.ts";
import cartRouter from "./cart.ts";
import swaggerRouter from "./swagger.ts";
// import productsRouter from "./products";

const router = Router();

// Swagger
router.use(swaggerRouter);
router.use(productsRouter);
// router.use(ordersRouter);
// router.use(usersRouter);
// router.use(cartRouter);

export default router;
