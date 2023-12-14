import { Router } from "express";
import productRouter from "./products";


const router = Router();

router.get("/", (req, res) => {
  res.render("dashboard/index", { pageTitle: "Dashboard", path: "/dashboard" });
});
router.use(productRouter);

export default router;
