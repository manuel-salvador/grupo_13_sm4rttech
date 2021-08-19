const express = require('express');
const router = express.Router();
let controller = require('../controllers/carritoController');

/* GET - Home */
router.get('/carritoDeCompra', controller.carrito)


module.exports = router;