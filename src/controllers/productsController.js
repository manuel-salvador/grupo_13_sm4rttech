 let { products } =require('../data/dataBase');
 let productsTelevisores = products.filter(product => product.category === "Televisores")
 let productsCelulares = products.filter(product => product.category === "Celulares")
 let productsTablets = products.filter(product => product.category === "Tablets")
 let productsGaming = products.filter(product => product.category === "Gaming")

module.exports = {
    producto: (req, res) => {
      res.render('products', {
          productsTelevisores,
          productsCelulares,
          productsGaming,
          productsTablets,
          products

      })
    }
   
}
