const express = require('express');
const router = express.Router();
const { admin, 
    agregar, 
    editar } = require('../controllers/adminController');

/* GET - Home */
router.get('/', admin)

router.get('/agregar', agregar),

router.get('/editar', editar)

module.exports = router;