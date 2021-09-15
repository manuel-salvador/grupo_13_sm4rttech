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


/* GET - Home */
router.get('/', admin)

/* productos admin */
router.get('/productsAdmin', productsAdmin)

/* agregar */
router.get('/agregar', agregar),
router.post('/agregar', multer.single('image'), agregarValidator, store)



/* get muestra form. de edit*/ 
router.get('/editar', filtroEditar)
router.post('/editar', filtrarEditar)


router.get('/editar/:id', editar)
router.put('/editar/:id',multer.single('image'), agregarValidator, actualizar)

/*delete */

router.delete('/delete/:id', destroy);

module.exports = router;