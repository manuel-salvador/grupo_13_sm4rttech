const express = require('express');
const router = express.Router();
const multer = require('../midlewares/uploadProductsFiles')
const { admin, 
    agregar,
    store,
    filtroEditar, 
    editar,
    actualizar,
    eliminar } = require('../controllers/adminController');

/* GET - Home */
router.get('/', admin)

/* agregar */
router.get('/agregar', agregar),
router.post('/agregar', multer.single('image'), store)



/* get muestra form. de edit*/ 
router.get('/editar?', filtroEditar)

router.get('/editar/:id', editar)
router.put("/editar/:id",multer.single('image'), actualizar)

/*delete */
router.delete("/eliminar",eliminar)


module.exports = router;