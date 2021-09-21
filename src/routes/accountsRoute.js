const express = require('express');
const router = express.Router();
const {
    register,
    userProfile,
    profile,
    login,
    processLogin,
    recuperarcontra,
    processRegister} = require('../controllers/accountsController');
const loginValidator = require('../validations/loginValidator');
const registerValidator = require('../validations/registerValidator')
const uploadUserAvatar = require('../midlewares/uploadUserAvatar')


/* GET - Home */
router.get('/login', login),

router.post('/login', loginValidator, processLogin),
/* router.get('/logout', logout) */



router.get('/recuperarcontra', recuperarcontra),


router.get('/register', register),
router.post('/register', uploadUserAvatar.single('avatar'),registerValidator, processRegister)

router.get ('/editProfile', userProfile),
router.get ('/profile', profile)

router.get('/sesion', (req, res) => {
    if(req.session != undefined){
      res.send('Sesion iniciada correctamente ' + req.session.email)
    }else{
      res.send('Sesion no iniciada')
    }
    })

module.exports = router;