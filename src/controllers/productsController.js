 let { products } =require('../data/dataBase');
 let productsTelevisores = products.filter(product => product.category.toLowerCase() === "televisores")
 let productsCelulares = products.filter(product => product.category.toLowerCase() === "celulares")
 let productsTablets = products.filter(product => product.category.toLowerCase() === "tablets")
 let productsGaming = products.filter(product => product.category.toLowerCase() === "gaming")

module.exports = {
    producto: (req, res) => {
      res.render('products', {
          productsTelevisores,
          productsCelulares,
          productsGaming,
          productsTablets,
          products

      })
    },
   
}
