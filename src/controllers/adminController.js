// let { products, writeJson } = require('../data/dataBase');
let { validationResult } = require('express-validator')
/* let productsTelevisores = products.filter(product => product.category.toLowerCase() === "televisores")
let productsCelulares = products.filter(product => product.category.toLowerCase() === "celulares")
let productsTablets = products.filter(product => product.category.toLowerCase() === "tablets")
let productsGaming = products.filter(product => product.category.toLowerCase() === "gaming") */
const db = require('../database/models')
const fs = require('fs');
const { logout } = require('./accountsController');
const { Op } = require("sequelize");


module.exports = {
    admin: (req, res) => {
        res.render('admin/indexAdmin')
    },

    productsAdmin: (req, res) => {
        res.render('admin/productsAdmin', {
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
        let colores = db.Color.findAll()

<<<<<<< HEAD
        Promise.all([categorias, marcas, tamaños, capacidades, rams])
            .then(([categorias, marcas, tamaños, capacidades, rams]) => {
                res.render('admin/agregar', { categorias, marcas, tamaños, capacidades, rams })
=======
        Promise.all([categorias, marcas, tamaños, capacidades, colores, rams])
            .then(([categorias, marcas, tamaños, capacidades, colores, rams]) => {
                res.render('admin/agregar', { categorias, marcas, tamaños, capacidades, colores, rams })
>>>>>>> master
            })
    },

    store: (req, res) => {
        let errors = validationResult(req)
<<<<<<< HEAD
=======
        let imagen = req.file?.filename
>>>>>>> master
        if (errors.isEmpty()) {
            let descripcion = req.body.description;
            let descriptionReplaced = descripcion.replace(/\r\n/gi, '-r-n');
            const {
                category,
                marca,
                price,
                name,
                tamaño,
                smart,
                capacity,
                ram,
<<<<<<< HEAD
                image,
                description = descriptionReplaced
            } = req.body



            db.Product.create({
                category_id: Number(category),
                name,
                price: Number(price),
                brand_id: Number(marca),
                smart: Number(smart),
                description
            })
                .then(product => {
                    console.log(product.id);
=======
                color,
                description = descriptionReplaced
            } = req.body


            db.Product.create({
                category_id: Number(category),
                name: name.trim(),
                price: Number(price.trim()),
                brand_id: Number(marca),
                smart: Number(smart),
                description: description.trim()
            })
                .then(product => {
>>>>>>> master

                    if (product && tamaño) {
                        db.Size_Product.create({
                            size_id: Number(tamaño),
                            product_id: Number(product.id)
                        })
                    }
<<<<<<< HEAD
=======

>>>>>>> master
                    if (product && capacity) {
                        db.Capacity_Product.create({
                            capacity_id: Number(capacity),
                            product_id: Number(product.id)
                        })
                    }
<<<<<<< HEAD
=======

>>>>>>> master
                    if (product && ram) {
                        db.Ram_Product.create({
                            ram_id: Number(ram),
                            product_id: Number(product.id)
                        })
                    }
<<<<<<< HEAD
                    if (product && !image) {
=======

                    if (product && color) {
                        db.Color_Product.create({
                            color_id: Number(color),
                            product_id: Number(product.id)
                        })
                    }

                    if (product && !imagen) {
>>>>>>> master
                        db.Product_Image.create({
                            image: 'logo-sm4rttech.png',
                            product_id: product.id
                        })
<<<<<<< HEAD
                    }

                    res.redirect(`/products/detalleDeProducto/${product.id}`)
=======
                    } else {
                        db.Product_Image.create({
                            image: imagen,
                            product_id: product.id
                        })
                    }

                    setTimeout(function () {
                    res.redirect(`/products/detalleDeProducto/${product.id}`)
                    }, 1000)

>>>>>>> master

                    /* if(arrayImages.length > 0){
                        let images = arrayImages.map(image => {
                            return {
                                image: image,
                                productId: product.id
                            }
                        })
                        db.ProductImage.bulkCreate(images)
                        .then(() => res.redirect('/admin/products'))
                        .catch(err => console.log(err))
                    } */
                })


        } else {
            let categorias = db.Category.findAll()
            let marcas = db.Brand.findAll()
            let tamaños = db.Size.findAll()
            let capacidades = db.Capacity.findAll()
            let rams = db.Ram.findAll()
            let colores = db.Color.findAll()

<<<<<<< HEAD
            Promise.all([categorias, marcas, tamaños, capacidades, rams])
                .then(([categorias, marcas, tamaños, capacidades, rams]) => {
                    res.render('admin/agregar',
                        { categorias, marcas, tamaños, capacidades, rams, errors: errors.mapped(), old: req.body })
=======
            Promise.all([categorias, marcas, tamaños, capacidades, rams, colores])
                .then(([categorias, marcas, tamaños, capacidades, rams, colores]) => {
                    res.render('admin/agregar',
                        { categorias, marcas, tamaños, capacidades, rams, colores, errors: errors.mapped(), old: req.body })
>>>>>>> master
                })

        }
    },

    /* agregar: (req, res) => {
        res.render('admin/agregar')
    }, */

    filtroEditar: (req, res) => {
        let lista = ["error"]
<<<<<<< HEAD
        res.render('admin/filtroEditar', { lista })
=======

        let categorias = db.Category.findAll()
        let marcas = db.Brand.findAll()

        Promise.all([categorias, marcas])
            .then(([categorias, marcas]) => {
                res.render('admin/filtroEditar', { categorias, marcas, lista})
            })
>>>>>>> master
    },

    filtrarEditar: (req, res) => {
        const {
            category,
            marca,
            id,
            name
        } = req.body

        db.Product.findAll({
            where:{
                [Op.and]: [
                    category != "" ? {category_id: category} : null,
                    marca != "" ? {brand_id: marca} : null,
                    id != "" ? {id: {[Op.like]:`%${id}%`}} : null,
                    name != "" ? {name: {[Op.like]:`%${name}%`}} : null
                ]
              },
              include: [{ association: "category" }]
        })
        .then(lista => {
            let categorias = db.Category.findAll()
            let marcas = db.Brand.findAll()

<<<<<<< HEAD
            // Filtrando los filtros vacios
            filtrosFiltrados = {}
            for ([key, value] of Object.entries(filtros)) {
                if (value != false) {
                    filtrosFiltrados[key] = value
                }
            }
=======
            Promise.all([categorias, marcas])
            .then(([categorias, marcas]) => {
                res.render('admin/filtroEditar', { categorias, marcas, lista})
            })
        })
    },
>>>>>>> master

    /*traer la vista con el producto a editar*/
    editar: (req, res) => {
        db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
            { association: "capacities" }, { association: "images" }, { association: "rams" },
            { association: "sizes" }]
        })
            .then(product => {
                //res.send(product)
                let categorias = db.Category.findAll()
                let marcas = db.Brand.findAll()
                let tamaños = db.Size.findAll()
                let capacidades = db.Capacity.findAll()
                let rams = db.Ram.findAll()
                let colores = db.Color.findAll()
                Promise.all([categorias, marcas, tamaños, capacidades, rams, colores])
                    .then(([categorias, marcas, tamaños, capacidades, rams, colores]) => {
                        res.render('admin/editar', { product, categorias, marcas, tamaños, capacidades, rams, colores })
                    })
            })

<<<<<<< HEAD
            // Comente por si no se quieren listar todos sin filtro

            /* if(0 == Object.keys(filtrosFiltrados).length){
                return productsFiltered = []
            }else{ */
            productsFiltered = db.filter(product => {
                for (var filtro in filtrosFiltrados) {
                    if ([product[filtro]].toString().toLowerCase().includes(filtrosFiltrados[filtro].toLowerCase())) {

                    } else {
                        return false;
                    }
                }
                return true;
            });

            return (productsFiltered);
            //  }
        }

        filtrar(filtrosForm, products)

        res.render('admin/filtroEditar', {
            lista: productsFiltered,
        })
    },

    /*traer la vista con el producto a editar*/
    editar: (req, res) => {
        let product = db.Product.findOne({
            where: {
                id: req.params.id,
            }, include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
            { association: "capacities" }, { association: "images" }, { association: "rams" },
            { association: "sizes" }]
        },
        )
        let categorias = db.Category.findAll()
        let marcas = db.Brand.findAll()
        let tamaños = db.Size.findAll()
        let capacidades = db.Capacity.findAll()
        let rams = db.Ram.findAll()

        Promise.all([product, categorias, marcas, tamaños, capacidades, rams])
            .then(([product, categorias, marcas, tamaños, capacidades, rams]) => {
                res.render('admin/editar', { product, categorias, marcas, tamaños, capacidades, rams })
            })
    },
    actualizar: (req, res) => {
        db.Product.update({
            name: req.body.name,
            price: req.body.price,
            marca: req.body.marca,
            smart: req.body.smart,
            category_id: req.body.category,
            description: req.body.description
    },{
        where: {
            id:req.params.id
        }
    });
    res.redirect(`/products/detalleDeProducto/${req.params.id}`)
    },

    //eliminar un producto
    destroy: function (req, res) {
        let productId = req.params.id;
        db.product.destroy({ where: { id: productId }, force: true }) // force: true es para asegurar que se ejecute la acción
            .then((result) => {
                return res.redirect('/')
            })
            .catch(error => res.send(error))
    }




    /* destroy: (req, res) => {
        db.ProductImage.findAll({
          where: {
            product_id: req.params.id,
          },
        }).then((result) => {
          result.forEach((image) => {
            fs.existsSync("./public/images/products/", image.image)
              ? fs.unlinkSync("./public/images/products/" + image.image)
              : console.log("-- No se encontró");
          });
          db.ProductImage.destroy({
            where: {
              product_id: req.params.id,
            },
          }).then((result) => {
            db.Product.destroy({
              where: {
                id: req.params.id,
              },
            }).then(
                res.redirect("/admin/products"));
          });
        });
      }, */



    /* destroy:(req,res)=>{
        let product= products.find(product => product.id === +req.params.id)
        products.forEach(product =>{
            if(product.id === +req.params.id){
                let productToDestroy = products.indexOf(product);
                products.splice(productToDestroy, 1)
     
            }
        })
        writeJson(products)
=======
    },
    actualizar: (req, res) => {
        let errors = validationResult(req);

        if (errors.isEmpty()) {

            let { category,
                name,
                price,
                marca,
                smart,
                description } = req.body;

            let { tamaño,
                capacity,
                ram,
                color
            } = req.body

            db.Product.findOne({
                where: { id: req.params.id },
                include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
                { association: "capacities" }, { association: "images" }, { association: "rams" },
                { association: "sizes" }]
            })
                .then(producto => {

                    if (tamaño) {
                        if (producto.sizes[0]) {
                            db.Size_Product.update({
                                size_id: tamaño
                            }, {
                                where: { product_id: producto.id }
                            })
                        } else {
                            db.Size_Product.create({
                                tamaño_id: Number(tamaño),
                                product_id: Number(producto.id)
                            })
                        }
                    }

                    if (capacity) {
                        if (producto.capacities[0]) {
                            db.Capacity_Product.update({
                                capacity_id: capacity
                            }, {
                                where: { product_id: producto.id }
                            })
                        } else {
                            db.Capacity_Product.create({
                                capacity_id: Number(capacity),
                                product_id: Number(producto.id)
                            })
                        }
                    }

                    if (ram) {
                        if (producto.rams[0]) {
                            db.Ram_Product.update({
                                ram_id: ram
                            }, {
                                where: { product_id: producto.id }
                            })
                        } else {
                            db.Ram_Product.create({
                                ram_id: Number(ram),
                                product_id: Number(producto.id)
                            })
                        }
                    }

                    if (color) {
                        if (producto.colores[0]) {
                            db.Color_Product.update({
                                color_id: color
                            }, {
                                where: { product_id: producto.id }
                            })
                        } else {
                            db.Color_Product.create({
                                color_id: Number(color),
                                product_id: Number(producto.id)
                            })
                        }
                    } else {
                        db.Color_Product.destroy({
                            where: { product_id: producto.id }
                        })
                    }


                    db.Product.update({
                        category_id: category,
                        name: name.trim(),
                        price:  Number(price.trim()),
                        brand_id: Number(marca),
                        smart,
                        description
                    }, {
                        where: { id: producto.id }
                    })
                        .then(() => {
                            res.redirect(`/admin/editar/${producto.id}`)
                        })
                })
        }
    },
    deleteProduct: (req, res) => {
        db.Product.findOne({
            where: { id: req.params.id },
            include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
            { association: "capacities" }, { association: "images" }, { association: "rams" },
            { association: "sizes" }]
        })
            .then(product => {
                // Elimino colores en pivot
                if (product.colores.length > 0) {
                    db.Color_Product.destroy({
                        where: { product_id: product.id }
                    })
                }

                // Elimino capacities en pivot
                if (product.capacities.length > 0) {
                    db.Capacity_Product.destroy({
                        where: { product_id: product.id }
                    })
                }

                // Elimino images en pivot
                if (product.images.length > 0) {
                    db.Product_Image.findAll({
                        where: {
                            product_id: product.id,
                        },
                    }).then((result) => {
                        result.forEach((image) => {
                            fs.existsSync("./public/images/products/", image.image) && image.image != "logo-sm4rttech.png"
                                ? fs.unlinkSync("./public/images/products/" + image.image)
                                : console.log("-- No se encontró");
                        })
                    })

                    db.Product_Image.destroy({
                        where: { product_id: product.id }
                    })
>>>>>>> master

                }

                // Elimino rams en pivot
                if (product.rams.length > 0) {
                    db.Ram_Product.destroy({
                        where: { product_id: product.id }
                    })
                }

                // Elimino sizes en pivot
                if (product.sizes.length > 0) {
                    db.Size_Product.destroy({
                        where: { product_id: product.id }
                    })
                }

                db.Product.destroy({
                    where: { id: req.params.id }
                })
                    .then(producto => {
                        return res.redirect('/admin/editar')
                    })

            })
    },
    team: (req, res) => {
        db.User.findAll()
            .then(usersTeam => {
                res.render('admin/team', { usersTeam })
            })
    }
<<<<<<< HEAD
         */
=======

>>>>>>> master
}