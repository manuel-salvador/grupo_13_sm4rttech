/* const express = require('express');
const router = express.Router();
let controller = require('../controllers/detalleDeProductoController');

router.use(function (req, res, next) {
    res.locals.user = req.session.user ? req.session.user : "";
    next();
});

router.get('/:id', controller.detalleDeProducto)


module.exports = router; */