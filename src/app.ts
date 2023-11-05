import express from "express";
import router from "./routes/index";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import { auth, requiresAuth } from "express-openid-connect";
import { ensureDBConnection } from "./middleware/db";
import { MongoError } from "mongodb";

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
  if (req.oidc.isAuthenticated()) {
    const { _raw, _json, ...userProfile } = req.oidc.user;
    console.log("userprofile", userProfile);
    console.log("fhjkhf", req.app.locals.db);
    console.log(_json);
    console.log("token", req.oidc.idTokenClaims);
    // req.app.locals.db.collection("users").insertOne(userProfile);
    req.app.locals.db
      .collection("users")
      .updateOne(
        { sub: userProfile.sub },
        { $set: userProfile },
        { upsert: true },
        (err: MongoError, result: unknown) => {
          if (err) {
            // Log errors during the database operation
            console.error("Error adding user to MongoDB:", err);
            res.status(500).send("Failed to add user");
          } else {
            // Log successful addition
            console.log(result);
            console.log("User added to MongoDB successfully");
            res.redirect("/api-docs");
          }
        }
      );
    // res.send(JSON.stringify(userProfile, null, 2));
    // res.send("Logged in");
    // res.redirect("/api-docs");
    res.redirect("/api-docs");
  } else {
    res.redirect("/login");
  }

  // res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

export default app;
