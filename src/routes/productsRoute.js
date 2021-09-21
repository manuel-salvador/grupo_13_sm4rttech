let express = require('express');
let router = express.Router();
const { producto,
        buscar,
        categoria
    } = require('../controllers/productsController')

    router.use(function (req, res, next) {
        res.locals.user = req.session.user ? req.session.user : "";
        next();
    });


/* GET - Lista todos los productos */
router.get('/', buscar)
router.get('/:categoria', categoria)

/* GET - Detalle del auto elegido */

module.exports = router;