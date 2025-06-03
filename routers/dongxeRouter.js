const express = require('express');
const router = express.Router();
const dongxeController = require('../controller/dongxeController');
const validate = require('../middleware/validations');
const dongxeSchema = require('../validations/dongxe.schema');

router.get('/', dongxeController.getAll);
// router.get('/paginate', dongxeController.getDongxeWithPagination);
// router.get('/search', dongxeController.searchDongxe);
// router.get('/:id', dongxeController.getByIddongxe);
// router.post('/', validate(dongxeSchema), dongxeController.createDongxe);
// router.put('/:id', validate(dongxeSchema), dongxeController.updateDongxe);
// router.delete('/:id', dongxeController.deleteDongxe);

module.exports = router;