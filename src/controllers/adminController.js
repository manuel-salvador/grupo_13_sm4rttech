let { products, writeJson } =require('../data/dataBase');

module.exports = {
    admin: (req, res) => {
        res.render('admin/indexAdmin')
    },
    agregar: (req, res) => {
        res.render('admin/agregar')
    },

    store: (req, res) => {
        let lastId = 1;
        products.forEach(product => {
            if(product.id > lastId){
                lastId = product.id
            }
        })
        const {
            category,
            marca,
            price,
            name,
            tamaño,
            smart,
            capacity,
            ram,
            image,
            description
        } = req.body

        /*  */
        let newProduct = {
            id: lastId + 1,
            name,
            category,
            marca,
            tamaño,
            smart,
            capacity,
            ram,
            price,
            description,
            image: req.file ? req.file.filename : ["joystick.jpg"]
        }
        
        products.push(newProduct)

        writeJson(products)
        /* res.send(products) */
        res.redirect(`/products#${newProduct.id}`)
    },


    editar: (req, res) => {
        res.render('admin/editar')

    }
   
        
            
        
}