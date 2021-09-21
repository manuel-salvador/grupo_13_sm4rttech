const express = require('express');
const router = express.Router();
let controller = require('../controllers/carritoController');

router.use(function (req, res, next) {
    res.locals.user = req.session.user ? req.session.user : "";
    next();
});

/* GET - Home */
router.get('/', controller.carrito)


module.exports = router;