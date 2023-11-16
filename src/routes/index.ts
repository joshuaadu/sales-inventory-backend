import { Router } from "express";
// import authRouter from "./auth";
import productsRouter from "./products";
import ordersRouter from "./orders";
// import usersRouter from "./users.ts";
// import cartRouter from "./cart.ts";
import swaggerRouter from "./swagger";
// import productsRouter from "./products";

const router = Router();

// Swagger
// router.use(authRouter);
router.use(swaggerRouter);
router.use(productsRouter);
router.use(ordersRouter);
// router.use(usersRouter);
// router.use(cartRouter);
router.get("/", (req, res) => {
  res.render("home");
});


export default router;
