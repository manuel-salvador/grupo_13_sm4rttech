const express = require('express');
const router = express.Router();
let controller = require('../controllers/indexController');

router.use(function (req, res, next) {
    res.locals.user = req.session.user ? req.session.user : "";
    next();
});

/* GET - Home */
router.get('/', controller.index)


module.exports = router;