const {products} =  require('../data/dataBase')

module.exports = {
    index: (req, res) => {
        res.render('index',
        {products})
    }
    
}
