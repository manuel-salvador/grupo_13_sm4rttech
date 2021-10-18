let { products, writeJson } = require('../data/dataBase');
let { validationResult } = require('express-validator')
let productsTelevisores = products.filter(product => product.category.toLowerCase() === "televisores")
let productsCelulares = products.filter(product => product.category.toLowerCase() === "celulares")
let productsTablets = products.filter(product => product.category.toLowerCase() === "tablets")
let productsGaming = products.filter(product => product.category.toLowerCase() === "gaming")
const db = require('../database/models')


module.exports = {
    admin: (req, res) => {
        res.render('admin/indexAdmin')
    },

    productsAdmin: (req, res) => {
        res.render('admin/productsAdmin',{
        productsTelevisores,
        productsCelulares,
        productsGaming,
        productsTablets,
        products
        })
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
        let categorias = db.Category.findAll()
        let marcas = db.Brand.findAll()
        let tamaños = db.Size.findAll()
        let capacidades = db.Capacity.findAll()
        let rams = db.Ram.findAll()

        Promise.all([categorias, marcas, tamaños, capacidades, rams])
        .then(([categorias, marcas, tamaños, capacidades, rams]) => {
            res.render('admin/agregar', {categorias, marcas, tamaños, capacidades, rams})
        })

    },

    store: (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        
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
        db.Product.create({
            name,
            category: id,
            brand: brand_id,
            size_product: size_id,
            smart_product: id ,
            capacity: capacity_id,
            ram_product: ram_id,
            price,
            description
        })
        .then(product => {
            if(arrayImages.length > 0){
                let images = arrayImages.map(image => {
                    return {
                        image: image,
                        productId: product.id
                    }
                })
                db.ProductImage.bulkCreate(images)
                .then(() => res.redirect('/admin/products'))
                .catch(err => console.log(err))
          }
        })
        
        
        res.redirect(`/detalleDeProducto/${newProduct.id}`)
    }else{
        res.render('admin/agregar', {
            errors: errors.mapped(),
            old: req.body
        })

    }
},
        
    /* agregar: (req, res) => {
        res.render('admin/agregar')
    }, */

    filtroEditar: (req, res) => {
        let lista = ["error"]
        res.render('admin/filtroEditar',{lista})
    },

    filtrarEditar: (req, res) => {
        const filtrosForm = req.body

        function filtrar(filtros, db) {

            // Filtrando los filtros vacios
            filtrosFiltrados = {}
            for ([key, value] of Object.entries(filtros)) {
                if (value != false){
                    filtrosFiltrados[key] = value
                }
            }

            //Filtrar un json por distintos filtros

            // Comente por si no se quieren listar todos sin filtro
            
            /* if(0 == Object.keys(filtrosFiltrados).length){
                return productsFiltered = []
            }else{ */
                productsFiltered = db.filter(product => {
                    for (var filtro in filtrosFiltrados) {
                        if ([product[filtro]].toString().toLowerCase().includes(filtrosFiltrados[filtro].toLowerCase()) ){

                        }else{
                            return false;
                        }
                    }
                    return true;
                });
            
            return(productsFiltered);
        //  }
        }
        
        filtrar(filtrosForm, products)

        res.render('admin/filtroEditar', {
            lista: productsFiltered,
        }) 
    },

/*traer la vista con el producto a editar*/
    editar: (req, res) => {
        db.Product.findOne(req.product, {
            include:[{association:"ram_product"}, {association:"colors"},{association:"sizes"},{association:"capacities"}]
        })
		let product = products.find(product => product.id === +req.params.id)
		res.render('admin/editar', {
			product
		})
	},
    actualizar: (req, res) => {
        let errors = validationResult(req)

        if(errors.isEmpty()){

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
            if(product.id == + req.params.id){
                product.name= (name == undefined) ? "" : name,
                product.category= (category == undefined) ? "" : category,
                product.marca= (marca == undefined) ? "" : marca,
                product.tamaño= (tamaño == undefined) ? "" : tamaño,
                product.smart= (smart == undefined) ? "" : smart,
                product.capacity= (capacity == undefined) ? "" : capacity,
                product.ram= (ram == undefined) ? "" : ram,
                product.price= (price == undefined) ? "" : price,
                product.description= (description == undefined) ? "" : description
                product.image = req.file ? req.file.filename : product.image
                
            }
            
        })
        writeJson(products)
       res.redirect(`/detalledeProducto/${req.params.id}`)
    } else {
        let product = products.find(product => product.id === +req.params.id)

        res.render('admin/editar', {
            product,
            errors: errors.mapped(),
            old: req.body
        })

    }

    },
    //eliminar un producto
    destroy:(req,res)=>{
        let product= products.find(product => product.id === +req.params.id)
        products.forEach(product =>{
            if(product.id === +req.params.id){
                let productToDestroy = products.indexOf(product);
                products.splice(productToDestroy, 1)
     
            }
        })
        writeJson(products)

        res.send(`has eliminado el producto ${product.name}`)
    }
   
        
            
        
}