import { check } from 'express-validator';

const validationRules = [
  check('password')
    .exists()
    .trim()
    .isLength({ min: 6 }),
  check('email')
    .exists()
    .trim()
    .isEmail()
    .isLength({ min: 1 }),
];

export default validationRules;
