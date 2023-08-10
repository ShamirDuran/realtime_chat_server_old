const express = require('express');
const router = express.Router();
const testController = require('../controllers/test.controller');
const { postValidation } = require('./validations/test.validation');
const jwtValidationMiddleware = require('../middlewares/jwt.middleware');

router.get('/', jwtValidationMiddleware, testController.get);
router.post('/', postValidation, testController.create);
router.put('/:id', testController.update);
router.delete('/:id', testController.remove);

module.exports = router;
