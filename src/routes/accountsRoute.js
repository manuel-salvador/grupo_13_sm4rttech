const express = require('express');
const router = express.Router();
const {
    register,
    userProfile,
    profile,
    login,
    logout,
    recuperarcontra,
    processRegister} = require('../controllers/accountsController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../midlewares/uploadUserAvatar')


/* GET - Home */
router.get('/login', login),
router.post('/login', loginValidator, login),
/* router.get('/logout', logout) */



router.get('/recuperarcontra', recuperarcontra),


router.get('/register', register),
router.post('/register', uploadUserAvatar.single('avatar'),registerValidator, processRegister)

router.get ('/editProfile', userProfile),
router.get ('/profile', profile)


module.exports = router;