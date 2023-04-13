const { body, validationResult } = require('express-validator');

const registrationValidationRules = () => [
  body('name').isLength({min: 2}),
  body('email').isEmail(),
  body('password').isLength({min: 6})
];

const loginValidationRules = () => [
  body('email').isEmail(),
  body('password').isLength({min: 6})
];

const validate = async (request, response, next) => {
  const errors = validationResult(request);

  if (!errors.isEmpty()) return response.status(400).json();

  return next();
}

module.exports = {
  registrationValidationRules,
  loginValidationRules,
  validate
}