const express = require('express');
const router = express.Router();
const mucphiController = require('../controller/mucphiController');
const validate = require('../middleware/validations');
const mucphiSchema = require('../validations/mucphiSchema');

router.get('/', mucphiController.getAll);
router.get('/paginate', mucphiController.getWithPagination);
router.get('/search', mucphiController.search);
router.get('/:id', mucphiController.getById);
router.post('/', validate(mucphiSchema), mucphiController.create);
router.put('/:id', validate(mucphiSchema), mucphiController.update);
router.delete('/:id', mucphiController.delete);

module.exports = router;