const express = require('express');
const router = express.Router();
const multer = require('../midlewares/uploadProductsFiles')
const { admin,
    productsAdmin,
    agregar,
    store,
    filtroEditar, 
    editar,
    actualizar,
    destroy } = require('../controllers/adminController');

/* GET - Home */
router.get('/', admin)

/* productos admin */
router.get('/productsAdmin', productsAdmin)

/* agregar */
router.get('/agregar', agregar),
router.post('/agregar', multer.single('image'), store)



/* get muestra form. de edit*/ 
router.get('/editar/cualquiera', filtroEditar)

router.get('/editar/:id', editar)
router.put('/editar/:id',multer.single('image'), actualizar)

/*delete */

router.delete('/delete/:id', destroy);

module.exports = router;