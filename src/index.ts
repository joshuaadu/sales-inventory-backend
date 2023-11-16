import { createServer } from "http";
import app from "./app";
import { express as expressConfig } from "./config";
import debug from "debug";

export const server = createServer(app);

const port = normalizePort(expressConfig.port || "3000");
app.set("port", port);

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.on("error", onError);
server.on("listening", onListening);

// normalize a port into a number, string, or false

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

// error event

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof port === "string" ? "Pipe" + port : "Port" + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind =
    typeof expressConfig.port === "string" ? "Pipe" + addr : "Port" + addr;
  debug("Listening on " + bind);
}
