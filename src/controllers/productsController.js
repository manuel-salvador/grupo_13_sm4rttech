 let { products } =require('../data/dataBase');
 let productsTelevisores = products.filter(product => product.category === "televisores")
 let productsCelulares = products.filter(product => product.category === "celulares")
 let productsTablets = products.filter(product => product.category === "tablets")
 let productsGaming = products.filter(product => product.category === "gaming")

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
