const express = require('express');
const router = express.Router();
const nhaCungCapController = require('../controller/nhaCungCapController');
const validate = require('../middleware/validations');
const nhaCungCapSchema = require('../validations/nhaCungCap.schema');

router.get('/', nhaCungCapController.getAllNhaCungCap);
router.get('/paginate', nhaCungCapController.getWithPagination);
router.get('/search', nhaCungCapController.searchNhaCungCap);
router.get('/:id', nhaCungCapController.getByIdNhaCungCap);
router.post('/', validate(nhaCungCapSchema), nhaCungCapController.createNhaCungCap);
router.put('/:id', validate(nhaCungCapSchema), nhaCungCapController.updateNhaCungCap);
router.delete('/:id', nhaCungCapController.deleteNhaCungCap);

module.exports = router;