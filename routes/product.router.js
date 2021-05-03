const express = require('express');
const router = express.Router();
const productController = require('../app/api/controllers/product.controller');

router.post('/add', productController.create);
router.get('/log/:userId', productController.getById);
module.exports = router;