const express = require('express');
const router = express.Router();
const {
    register,
    login,
    logout,
    recuperarcontra,
    processRegister} = require('../controllers/accountsController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator')


/* GET - Home */
router.get('/login', login),
router.post('/login', loginValidator, login),
/* router.get('/logout', logout) */



router.get('/recuperarcontra', recuperarcontra),


router.get('/register', register),
router.post('/register', registerValidator, processRegister)


module.exports = router;