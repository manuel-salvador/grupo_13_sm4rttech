let express = require('express');
let router = express.Router();
const { producto,
        buscar,
        categoria
    } = require('../controllers/productsController')


/* GET - Lista todos los productos */
router.get('/', buscar)
router.get('/:categoria', categoria)

/* GET - Detalle del auto elegido */

module.exports = router;