import http from "http";
import app from "./app.js";
import { express } from "./config/index.js";
import { initDb } from "./db/index.js";

const server = http.createServer(app);

initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Db initialized successfully");
    server.listen(express.port, () => {
      console.log(`Server is running on port ${express.port}`);
    });
  }
});
