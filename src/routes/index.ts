import { Router } from "express";
// import authRouter from "./auth";

import swaggerRouter from "./swagger";
import apiRouter from "./api";
import dashboardRouter from "./dashboard";
// import productsRouter from "./products";

const router = Router();

// Swagger
// router.use(authRouter);
router.use(swaggerRouter);
router.use("/api", apiRouter);
router.use("/dashboard", dashboardRouter);

// router.use(usersRouter);
// router.use(cartRouter);
router.get("/", (req, res) => {
  res.render("home", { pageTitle: "Home" });
});

export default router;
