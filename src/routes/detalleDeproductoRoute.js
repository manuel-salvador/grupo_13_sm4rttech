const express = require('express');
const router = express.Router();
let controller = require('../controllers/detalleDeProductoController');

router.get('/:id', controller.detalleDeProducto)


module.exports = router;