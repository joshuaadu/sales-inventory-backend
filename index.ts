import http from "http";
import app from "./app.ts";
import { express as expressConfig } from "./config/index.ts";
// const http = require("http");
// const app = require("./app.js");
// const { express } = require("./config/index.js");
// const { initDb } = require("./db/index.js");
import { initDb } from "./model";
const server = http.createServer(app);

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Db initialized successfully");
    server.listen(expressConfig.port, () => {
      console.log(`Server is running on port ${expressConfig.port}`);
    });
  }
});
