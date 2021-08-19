const express = require('express');
const router = express.Router();
let controller = require('../controllers/accountsController');

/* GET - Home */
router.get('/login', controller.login),
router.get('/recuperarcontra', controller.recuperarcontra),
router.get('/register', controller.register),


module.exports = router;