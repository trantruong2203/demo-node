const express = require('express');
const router = express.Router();
const dongxeController = require('../controller/dongxeController');
const validate = require('../middleware/validations');
const dongxeSchema = require('../validations/dongxe.schema');

router.get('/', dongxeController.getAllDongXe);
router.get('/search', dongxeController.searchDongxe);
router.get('/:id', dongxeController.getByIddongxe);
router.post('/', validate(dongxeSchema), dongxeController.createDongxe);
router.put('/:id', dongxeController.updateDongxe);
router.delete('/:id', dongxeController.deleteDongxe);
router.get('/paginate', dongxeController.getDongxeWithPagination);

module.exports = router;