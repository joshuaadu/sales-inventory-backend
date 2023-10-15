const express = require("express");
const router = require("./routes/index.js");

const app = express();

app
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", router);

module.exports = app;

