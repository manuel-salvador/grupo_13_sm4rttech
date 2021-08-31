const express = require('express');
const router = express.Router();
const multer = require('../midlewares/uploadProductsFiles')
const { admin, 
    agregar,
    store, 
    editar } = require('../controllers/adminController');

/* GET - Home */
router.get('/', admin)

/* agregar */
router.get('/agregar', agregar),
router.post('/agregar', multer.single('image'), store)

router.get('/editar', editar)

module.exports = router;