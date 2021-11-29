const db = require('../database/models')
const { Op } = require("sequelize");


module.exports = {
    carrito: (req, res) => {
        db.Product.findOne({
              where: {
                id: 1
              },
              include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
              { association: "capacities" }, { association: "images" }, { association: "rams" },
              { association: "sizes" }]
            })
              .then(product => {
                res.render('carritoDeCompra', { product })
              })
          },
    
}
