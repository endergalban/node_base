import { validationResult } from 'express-validator';

const validate = (req, res, next) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    const extractedErrors = [];
    validationErrors.array({ onlyFirstError: true })
      .map(err => extractedErrors.push({ [err.param]: err.msg }));
    return res.status(422).json({ errors: extractedErrors });
  }
  return next();
};

export default validate;
