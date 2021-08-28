let express = require('express');
let router = express.Router();
let controller = require('../controllers/productsController')


/* GET - Lista todos los autos */
router.get('/', controller.producto)
/* GET - Detalle del auto elegido */


module.exports = router;