const express = require('express');
const router = express.Router();
let controller = require('../controllers/detalleDeProductoController');

router.get('/', controller.detalleDeProducto)


module.exports = router;