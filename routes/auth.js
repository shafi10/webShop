const express = require('express');
const router = express.Router()
const {postLogin,postRegistration, getUser} = require('../controllers/auth')
const {check} = require('express-validator/check')
const authen = require('../middleware/authenticate')

router.post('/register', [
    check('name', 'name is required').not().isEmpty(),
    check('email', ' please enter a email').isEmail()
] , postRegistration);


router.post('/login',[
    check('email', ' please enter a email').isEmail(),
    check('password', 'password is required').exists()
], postLogin);

router.get('/user',authen, getUser);

module.exports = router;