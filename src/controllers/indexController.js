const {products} =  require('../data/dataBase')
const db=require("../database/models")

module.exports = {
    index: (req, res) => {
        db.User.findAll({
            include:[{
                association:"address"
            }]
            
        })
        .then(usuario=>{
            res.send(usuario)
        })

 /*       res.render('index',
        {products})*/
    }
    
}
