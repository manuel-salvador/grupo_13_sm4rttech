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

    

        // Trae colores

        /* db.Color_Product.findAll({
            include: [{association: "colorName"}, {association: "product"}]
        })
        .then(colores => {
            res.send(colores)
        }) */
    }
    
}
