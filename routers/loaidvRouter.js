const express = require('express');
const router = express.Router();
const loaidvController = require('../controller/loaidvController');
const validate = require('../middleware/validations');
const loaidvSchema = require('../validations/loaidvSchema');

router.get('/', loaidvController.getAll);
router.get('/paginate', loaidvController.getWithPagination);
router.get('/search', loaidvController.search);
router.get('/:id', loaidvController.getById);
router.post('/', validate(loaidvSchema), loaidvController.create);
router.put('/:id', validate(loaidvSchema), loaidvController.update);
router.delete('/:id', loaidvController.delete);

module.exports = router;