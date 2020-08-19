const express = require('express');
const router = express.Router()
const {postOrder, getOrder , getUserOrder, getSingleOrder} = require('../controllers/order')
const authen = require('../middleware/authenticate');
const adminAuth = require('../middleware/adminAuth')

router.post('/order',authen, postOrder)
router.get('/getOrder',adminAuth, getOrder);
router.get('/userOrder',authen, getUserOrder);
router.get('/singleOrder/:id',adminAuth, getSingleOrder);

module.exports = router;