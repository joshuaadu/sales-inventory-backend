const { body, validationResult, check } = require("express-validator");

const productValidationRules = () => {
  return [
    body("name", "Product name required!").isString(),
    body("description", "Product description required!").isString(),
    body("price", "Product price required!").isNumeric(),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  console.log("errors", errors);

  return res.status(400).json({
    errors: errors.array(),
  });
};

module.exports = {
  productValidationRules,
  validate,
};
