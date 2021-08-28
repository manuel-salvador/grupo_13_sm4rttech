 let { getProducts } =require('../data/dataBase')

module.exports = {
    producto: (req, res) => {
      res.render('products', {
          products : getProducts
      })
    }
   
}
