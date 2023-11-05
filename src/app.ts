import express from "express";
import router from "./routes/index";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { auth, requiresAuth } from "express-openid-connect";
import { ensureDBConnection } from "./middleware/db";

const app = express();

const config = {
  authRequired: true,
  auth0Logout: true,
  baseURL: "http://localhost:3000/",
  clientID: process.env.AUTH0_CLIENT_ID,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
  secret: process.env.AUTH0_CLIENT_SECRET,
};

app.use(ensureDBConnection);

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

app.use(morgan("tiny"));
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(cookieParser())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", router);

// req.isAuthenticated is provided from the auth router
app.get("/", async (req, res) => {
  console.log(req.oidc.idTokenClaims);
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

export default app;
