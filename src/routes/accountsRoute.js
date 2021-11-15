const express = require('express');
const router = express.Router();
const {
    register,
    editProfile,
    profile,
    login,
    processLogin,
    recuperarcontra,
    processRegister,
    logout,
    profileEdit,
    updateProfile,
    deleteUser} = require('../controllers/accountsController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../midlewares/uploadUserAvatar')
const userSession = require('../midlewares/usersSession')
const usersLog = require('../midlewares/usersLog')

router.use(function (req, res, next) {
  res.locals.user = req.session.user ? req.session.user : "";
  next();
});

/* GET -login */
router.get('/login', usersLog ,login),
router.post('/login', loginValidator, processLogin),

/* router.get('/logout', logout) */
router.get('/logout',userSession, logout)

/* Router recuperar contraseña */
router.get('/recuperarcontra',userSession, recuperarcontra),


/* registro*/
router.get('/register', usersLog, register),
router.post('/register', uploadUserAvatar.single('avatar'),registerValidator, processRegister)

/* perfil/edicion*/

router.get('/profile',userSession, profile),
router.get('/editProfile',userSession, editProfile),


router.put("/updateProfile/:id",uploadUserAvatar.single("avatar"),updateProfile)

router.delete("/deleteProfile/:id", userSession, deleteUser)

/* verificar sesion*/
router.get('/sesion', (req, res) => {
    if(req.session.user != undefined){
      res.send('Sesion iniciada correctamente ' + req.session.user.email)
    }else{
      res.send('Sesion no iniciada')
    }
    })

module.exports = router;