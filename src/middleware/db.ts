import { Request, Response, NextFunction } from "express";
import { initDb } from "../models";

export const ensureDBConnection = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.app.locals.db) {
    initDb((err, _db) => {
      if (err) {
        return res.status(500).send("Error connecting to the database");
      }

      req.app.locals.db = _db; // Attach db to app.locals
      next();
    });
  } else {
    next();
  }
};
