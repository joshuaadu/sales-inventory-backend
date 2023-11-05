import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const productValidationRules = () => {
  return [
    body("name", "Product name required!").isString(),
    body("description", "Product description required!").isString(),
    body("price", "Product price required!").isNumeric(),
  ];
};

export const orderValidationRules = () => {
  return [
    body("user", "User ID required!").trim().isString(),
    body("product", "Product ID required!").isString(),
    body("quantity", "Product quantity required!").isNumeric(),
    body("date", "Date required required!").trim().isString(),
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
