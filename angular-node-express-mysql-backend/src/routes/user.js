const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const { authorizationMiddleware } = require('../middlewares/auth.middleware');
const { registrationValidationRules, loginValidationRules, validate } = require('../utils/user-validation');

router.post('/:locale/register', registrationValidationRules(), validate, userController.register);
router.post('/:locale/login', loginValidationRules(), validate, userController.login);
router.put('/:locale/edit', userController.editUser);
router.get('/:locale/me', authorizationMiddleware, userController.user);
router.get('/:locale/users', userController.companyUsers)

module.exports = router;