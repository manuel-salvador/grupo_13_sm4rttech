let { products, writeJson } =require('../data/dataBase');

module.exports = {
    admin: (req, res) => {
        res.render('admin/indexAdmin')
    },
  /*  search:(req,res)=>{
        let result=[]
        products.forEach(products =>{
            if (products.name.tolowerCase().include(req.query.busqueda.tolowerCase()))
            result.push(products)
            
        });
        res.render("results",{
            result,
            search:req.query.busqueda
        })

    },*/
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
    agregar: (req, res) => {
        res.render('admin/agregar')
    },


/*traer la vista con el producto a editar*/
    editar: (req, res) => {
        let productEdit= products.find(products=>{
            return products.id==req.params.id
        })
      
    
        res.render('admin/editar',{
            product:productEdit
        })

    },
    actualizar: (req, res) => {

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

        /**recorrimos el arrays y modificamos el product */
        products.forEach(product=>{
            if(product.id== + req.params.id){
                product.id=id,
                product.name=name,
                product.category=category,
                product.marca=marca,
                product.tamaño=tamaño,
                product.smart=smart,
                product.capacity=capacity,
                product.ram=ram,
                product.price=price,
                product.description=description

                
            }
            
        })
        writeJson(products)
       

    },
    eliminar:(req,res)=>{
        res.render("admin/eliminar")
    }
   
        
            
        
}