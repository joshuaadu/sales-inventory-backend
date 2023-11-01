import { body, validationResult, check } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const productValidationRules = () => {
  return [
    body("name", "Product name required!").isString(),
    body("description", "Product description required!").isString(),
    body("price", "Product price required!").isNumeric(),
  ];
};

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  console.log("errors", errors);

  return res.status(400).json({
    errors: errors.array(),
  });
};
