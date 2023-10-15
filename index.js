const http = require("http");
const app = require("./app.js");
const { express } = require("./config/index.js");
const { initDb } = require("./db/index.js");

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
