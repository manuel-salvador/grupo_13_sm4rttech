let express = require('express');
let router = express.Router();
const { producto,
        buscar,
        categoria,
        detalleDeProducto
    } = require('../controllers/productsController')

    router.use(function (req, res, next) {
        res.locals.user = req.session.user ? req.session.user : "";
        next();
    });


/* GET - Lista todos los productos */
router.get('/', buscar)
router.get('/:categoria', categoria)

/* GET - Detalle del producto elegido */
router.get('/detalleDeProducto/:id', detalleDeProducto)

module.exports = router;