//const {products} =  require('../data/dataBase');
const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        /* res.render('index',
        {products}) */

        db.Product.findAll({
            include: [{association: "category"}, {association: "colores"}, {association: "brand"},
        {association: "capacities"}, {association: "images"}, {association:"rams"},
        {association: "sizes"}]
        })
        .then( products => {
            res.render('index', {products}) 
        })
    },

    nosotros: (req, res) =>{
        res.render('sobreNosotros')
    }
    
}
