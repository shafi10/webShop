const express = require('express');
const router = express.Router()

const {getProducts, getSingleProduct, postProduct, updateProduct, deleteProduct} = require('../controllers/product')
const authen = require('../middleware/authenticate')
const adminAuth = require('../middleware/adminAuth')

router.get('/products', getProducts);
router.get('/product/:id', getSingleProduct);
router.post('/postProduct',adminAuth , postProduct)
router.put('/upProduct/:id',adminAuth , updateProduct);
router.delete('/delProduct/:id',adminAuth , deleteProduct);

module.exports = router;