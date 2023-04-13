const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authorizationMiddleware } = require('../middlewares/auth.middleware');
const { registrationValidationRules, loginValidationRules, validate } = require('../utils/user-validation');

router.post('/register', registrationValidationRules(), validate, userController.register);
router.post('/login', loginValidationRules(), validate, userController.login);
router.get('/me', authorizationMiddleware, userController.user)

module.exports = router;