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
    team,
    deleteProduct,
    filterUsers,
    editPermissions } = require('../controllers/adminController');
const agregarValidator = require('../validations/agregarValidator')
const usersAdminCheck = require('../midlewares/usersAdminCheck')
const superAdminCheck = require('../midlewares/superAdminCheck')


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
router.post('/editar', usersAdminCheck, filtrarEditar)


router.get('/editar/:id', usersAdminCheck, editar)
router.put('/editar/:id', multer.single('image'), agregarValidator, actualizar)

/*delete */
router.get('/delete/:id', usersAdminCheck, deleteProduct)

/* Rutas Team, Equipo*/
router.get('/team', usersAdminCheck, team)

// filtrar usuarios
router.post('/team/filterUsers', usersAdminCheck, filterUsers)

// editar permisos
router.put('/team/editPermissions', superAdminCheck, editPermissions)


module.exports = router;