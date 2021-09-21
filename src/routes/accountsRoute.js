const express = require('express');
const router = express.Router();
const {
    register,
    userProfile,
    profile,
    login,
    processLogin,
    recuperarcontra,
    processRegister,
    logout} = require('../controllers/accountsController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../midlewares/uploadUserAvatar')
const userSession = require('../midlewares/usersSession')
const usersLog = require('../midlewares/usersLog')

/* GET -login */
router.get('/login', usersLog ,login),
router.post('/login', loginValidator, processLogin),

/* router.get('/logout', logout) */
router.get('/logout', logout)

/* Router recuperar contraseña */
router.get('/recuperarcontra',userSession, recuperarcontra),


/* registro*/
router.get('/register', usersLog, register),
router.post('/register', uploadUserAvatar.single('avatar'),registerValidator, processRegister)

/* perfil/edicion*/
router.get ('/editProfile',userSession, userProfile),
router.get ('/profile',userSession,  profile)

/* verificar sesion*/
router.get('/sesion', (req, res) => {
    if(req.session.user != undefined){
      res.send('Sesion iniciada correctamente ' + req.session.user.email)
    }else{
      res.send('Sesion no iniciada')
    }
    })

module.exports = router;