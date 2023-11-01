import { createServer } from "http";
import app from "./app";
import { express as expressConfig } from "./config";
// const http = require("http");
// const app = require("./app.js");
// const { express } = require("./config/index.js");
// const { initDb } = require("./db/index.js");
import { initDb } from "./models";
export const server = createServer(app);

initDb((err, _db) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Db initialized successfully", _db);
    server.listen(expressConfig.port, () => {
      console.log(`Server is running on port ${expressConfig.port}`);
    });
  }
});
