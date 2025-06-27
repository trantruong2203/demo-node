const express = require('express');
const router = express.Router();
const dkccController = require('../controller/DkccController');
const validate = require('../middleware/validations');
const dkccSchema = require('../validations/dkcc.schema');

router.get('/', dkccController.getAll);
router.get('/paginate', dkccController.getWithPagination);
router.get('/search', dkccController.search);
router.get('/:id', dkccController.getById);
router.post('/', validate(dkccSchema), dkccController.create);
router.put('/:id', validate(dkccSchema), dkccController.update);
router.delete('/:id', dkccController.delete);

module.exports = router;