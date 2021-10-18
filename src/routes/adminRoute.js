const express = require('express');
const router = express.Router();
const multer = require('../midlewares/uploadProductsFiles')
const { admin,
    productsAdmin,
    agregar,
    store,
    filtroEditar,
    filtrarEditar, 
    editar,
    actualizar,
    destroy,
    team } = require('../controllers/adminController');
const agregarValidator = require('../validations/agregarValidator')
const usersAdminCheck = require('../midlewares/usersAdminCheck')

router.use(function (req, res, next) {
    res.locals.user = req.session.user ? req.session.user : "";
    next();
});


/* GET - Home */
router.get('/',usersAdminCheck, admin)

/* productos admin */
router.get('/productsAdmin',usersAdminCheck, productsAdmin)

/* agregar */
router.get('/agregar', usersAdminCheck, agregar),
router.post('/agregar', multer.single('image'), agregarValidator, store)



/* get muestra form. de edit*/ 
router.get('/editar', usersAdminCheck, filtroEditar)
router.post('/editar', filtrarEditar)


router.get('/editar/:id', usersAdminCheck, editar)
router.put('/editar/:id',multer.single('image'), agregarValidator, actualizar)

/*delete */
router.delete('/delete/:id', destroy);


/* Rutas Team, Equipo*/
router.get('/team', usersAdminCheck, team)


module.exports = router;