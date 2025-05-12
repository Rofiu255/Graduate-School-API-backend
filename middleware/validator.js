// middleware/validator.js

const { validationResult } = require('express-validator');

exports.runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = errors.array().map(err => ({ [err.param]: err.msg }));
    return res.status(422).json({
      message: 'Validation failed',
      errors: extractedErrors,
    });
  }
  next();
};
