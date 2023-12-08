import { Response, Request, NextFunction } from "express";

const errorhandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);

  if (err instanceof SyntaxError && err instanceof TypeError) {
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  }
  next();
};

export default errorhandler;
