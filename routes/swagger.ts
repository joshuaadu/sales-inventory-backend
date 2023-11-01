import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const router = express.Router();

// Swagger
router.use("/api-docs", swaggerUi.serve);
router.get("/api-docs", swaggerUi.setup(swaggerDocument));

export default router;
