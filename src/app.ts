import express, { Request } from "express";
import morgan from "morgan";
import { auth } from "express-openid-connect";
import { MongoError } from "mongodb";
import pluralize from "pluralize";
// import cookieParser from "cookie-parser";

import router from "./routes/index";
import { ensureDBConnection } from "./middleware/db";
import path from "path";

// const config = {
//   authRequired: true,
//   auth0Logout: true,
//   baseURL: "https://sales-inventory.onrender.com",
//   clientID: process.env.AUTH0_CLIENT_ID,
//   issuerBaseURL: process.env.AUTH0_DOMAIN,
//   secret: process.env.AUTH0_CLIENT_SECRET,
// };

const app = express();
app.locals.pluralize = pluralize;

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(ensureDBConnection);

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

app.use(morgan("tiny"));
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }
app
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  // .use(cookieParser())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", router);

// req.isAuthenticated is provided from the auth router
// app.get("/", async (req, res) => {
//   if (req.oidc.isAuthenticated()) {
//     const { _raw, _json, ...userProfile } = (req as Request & { oidc: any })
//       .oidc.user;
//     console.log("userprofile", userProfile);
//     // console.log("fhjkhf", req.app.locals.db);
//     console.log(_json);
//     // console.log("token", req.oidc.idTokenClaims);
//     req.app.locals.db
//       .collection("users")
//       .updateOne(
//         { sub: userProfile.sub },
//         { $set: userProfile },
//         { upsert: true },
//         (err: MongoError, result: unknown) => {
//           if (err) {
//             // Log errors during the database operation
//             console.error("Error adding user to MongoDB:", err);
//             res.status(500).send("Failed to add user");
//           } else {
//             // Log successful addition
//             console.log(result);
//             console.log("User added to MongoDB successfully");
//             res.redirect("/api-docs");
//           }
//         }
//       );
//     res.redirect("/api-docs");
//   } else {
//     res.redirect("/login");
//   }
// });

app.use((req, res) => {
  res.status(404).render("404");
});

export default app;
