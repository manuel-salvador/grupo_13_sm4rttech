const db = require('../database/models');

module.exports = (req, res, next) => {
    db.Category.findAll()
    .then(categorias => {
        res.locals.categories = categorias        
        next()
    })
}