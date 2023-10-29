const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
app
  .use(express.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", router);

module.exports = app;
