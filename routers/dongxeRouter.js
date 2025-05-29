const express = require('express');
const router = express.Router();
const dongxeController = require('../controller/dongxeController');

router.get('/', dongxeController.getAllDongXe);

module.exports = router;