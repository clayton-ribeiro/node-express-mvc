const express = require('express');
const router = express.Router();

const productsController = require('../controllers/product');



router.get('/', productsController.getProducts);
router.post('/', productsController.postAddProduct);

module.exports = router;