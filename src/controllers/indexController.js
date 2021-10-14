//const {products} =  require('../data/dataBase');
const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        /* res.render('index',
        {products}) */


        //Trae producto con categorias

        db.Product.findAll({
            include: [{association: "category"}, {association: "colores"}, {association: "brand"},
        {association: "capacities"}, {association: "image"}]
        })
        .then( productos => {
            

            res.send(productos)
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
