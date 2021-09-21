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
const userSession = require('../midlewares/usersSession')
const usersLog = require('../midlewares/usersLog')

/* GET - Home */
router.get('/login', usersLog ,login),
router.post('/login', loginValidator, login),
/* router.get('/logout', logout) */



router.get('/recuperarcontra',userSession, recuperarcontra),


router.get('/register', usersLog, register),
router.post('/register', uploadUserAvatar.single('avatar'),registerValidator, processRegister)

router.get ('/editProfile',userSession, userProfile),
router.get ('/profile',userSession,  profile)


module.exports = router;