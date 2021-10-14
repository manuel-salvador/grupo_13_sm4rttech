const {products} =  require('../data/dataBase');
const db = require('../database/models');

module.exports = {
    index: (req, res) => {
        /* res.render('index',
        {products}) */


        //Trae producto con categorias

        db.Product.findAll({
            include: [{association: "category"}, {association: "colores"}, {association: "brand"},
        {association: "capacities"}]
        })
        .then( productos => {
            let products = []
            productos.forEach(product => {
                var newProduct = { Nombre:product.name, marca:product.brand.brand}
                products.push(newProduct)
            })

            res.send(products)
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
