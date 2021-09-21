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
    destroy } = require('../controllers/adminController');
const agregarValidator =require('../validations/agregarValidator')
const usersAdminCheck = require('../midlewares/usersAdminCheck')


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


router.get('/editar/:id',usersAdminCheck, editar)
router.put('/editar/:id',multer.single('image'), agregarValidator, actualizar)

/*delete */

router.delete('/delete/:id', destroy);

module.exports = router;