const { Router } = require("express");
const productsRouter = require("./products.js");
const ordersRouter = require("./orders.js");
const usersRouter = require("./users.js");
const cartRouter = require("./cart.js");
const swaggerRouter = require("./swagger.js");

const router = Router();

// Swagger
router.use(swaggerRouter);
router.use(productsRouter);
// router.use(ordersRouter);
// router.use(usersRouter);
// router.use(cartRouter);

module.exports = router;
