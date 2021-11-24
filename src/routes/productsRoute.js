let express = require('express');
let router = express.Router();
const { productos,
        buscar,
        categoria,
        detalleDeProducto
    } = require('../controllers/productsController')

    router.use(function (req, res, next) {
        res.locals.user = req.session.user ? req.session.user : "";
        next();
    });


/* GET - Lista todos los productos */
router.get('/', productos)
router.get('/search', buscar)
router.get('/category/:categoria', categoria)

/* GET - Detalle del producto elegido */
router.get('/detalleDeProducto/:id', detalleDeProducto)

module.exports = router;