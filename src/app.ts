import express from "express";
import router from "./routes/index";
import morgan from "morgan";

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

export default app;
