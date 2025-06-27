const express = require('express');
const router = express.Router();
const dongxeController = require('../controller/dongxeController');
const validate = require('../middleware/validations');
const dongxeSchema = require('../validations/dongxe.schema');

router.get('/', dongxeController.getAll);
router.get('/paginate', dongxeController.getWithPagination);
router.get('/search', dongxeController.search);
router.get('/:id', dongxeController.getById);
router.post('/', validate(dongxeSchema), dongxeController.create);
router.put('/:id', validate(dongxeSchema), dongxeController.update);
router.delete('/:id', dongxeController.delete);

module.exports = router;