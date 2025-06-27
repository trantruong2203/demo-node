const express = require('express');
const router = express.Router();
const accountController = require('../controller/AccountController');
const validate = require('../middleware/validations');
const accountSchema = require('../validations/account.schema');

router.get('/', accountController.getAll);
router.get('/:username', accountController.getById);
router.post('/register',validate(accountSchema), accountController.create);
router.post('/login', validate(accountSchema), accountController.login);

module.exports = router;