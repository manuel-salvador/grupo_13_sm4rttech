const express = require('express');
const router = express.Router();
let controller = require('../controllers/agregarController');

/* GET - Home */
router.get('/', controller.agregar)


module.exports = router;