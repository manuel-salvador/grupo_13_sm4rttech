let { products } =require('../data/dataBase');

module.exports = {
    detalleDeProducto: (req, res) => {
        let product = products.find(products=>{
            return products.id==req.params.id
        })

        res.render('detalleDeProducto', {
            product
        })
    }
    
}