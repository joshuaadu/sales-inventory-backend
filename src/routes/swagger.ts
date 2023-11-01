import { Router } from "express";
import { serve, setup } from "swagger-ui-express";
import swaggerDocument from "../../swagger.json";

const router = Router();

// Swagger
router.use("/api-docs", serve);
router.get("/api-docs", setup(swaggerDocument));

export default router;


