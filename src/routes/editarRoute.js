const express = require('express');
const router = express.Router();
let controller = require('../controllers/editarController');

/* GET - Home */
router.get('/', controller.editar)


module.exports = router;