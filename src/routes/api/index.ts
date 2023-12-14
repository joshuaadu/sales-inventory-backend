import { Router } from "express";

import productsRouter from "./products";
import ordersRouter from "./orders";
// import usersRouter from "./users.ts";
// import cartRouter from "./cart.ts";

const router = Router();

router.use(productsRouter);
router.use(ordersRouter);

export default router;
