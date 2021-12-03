const db = require('../database/models')
const { Op } = require("sequelize");
/* let { products } = require('../data/dataBase');
const Product = require('../database/models/Product');
let productsTelevisores = products.filter(product => product.category.toLowerCase() === "televisores")
let productsCelulares = products.filter(product => product.category.toLowerCase() === "celulares")
let productsTablets = products.filter(product => product.category.toLowerCase() === "tablets")
let productsGaming = products.filter(product => product.category.toLowerCase() === "gaming") */

module.exports = {
  productos: (req, res) => {
    db.Product.findAll({
      include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
      { association: "capacities" }, { association: "images" }, { association: "rams" },
      { association: "sizes" }]
    })
      .then(productsFiltrados => {

        // Aca va el filtro para obtener los filtros
        var claves = []
        function obtenerFiltros(list) {

          list.forEach(objeto => {
            let getKeys = Object.keys(objeto.dataValues);
            for (var clave of getKeys) {
              if (!claves.includes(clave) && clave != "order" && clave != "brand" && clave != "images" && clave != "category_id" && clave != "brand_id" && clave != "id" && clave != "name" && clave != "category" && clave != "price" && clave != "image" && clave != "description") {
                claves.push(clave)
              }
            }
          })

          claves = claves.filter(clave => {
            count = 0
            list.forEach(producto => {
              if (producto[clave] == null || producto[clave] == "" || producto[clave] == undefined) {
                count++
              }
            })
            if (count != list.length) {
              return true
            }
          })

          return claves

        }

        obtenerFiltros(productsFiltrados)

        res.render('listadoProductos', {
          lista: productsFiltrados,
          busqueda: "",
          claves
        })

      })
  },
  detalleDeProducto: (req, res) => {
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
      { association: "capacities" }, { association: "images" }, { association: "rams" },
      { association: "sizes" }]
    })
      .then((product) => {

        if(product){
          db.Product.findAll({
            where: {
              category_id: product.category.id,
            },
            include: [{association: "category"}, {association: "colores"}, {association: "brand"},
            {association: "capacities"}, {association: "images"}, {association:"rams"},
            {association: "sizes"}]
          }).then((products) => {
            res.render('detalleDeProducto', {
              product,
              products
            }) 
          });
        } else {
          res.redirect('/producto-no-encontrado')
        }
  });
},

  buscar: (req, res) => {
    let busqueda = req.query.buscar

    let lista = []

    if (!busqueda) {
      res.render('listadoProductos', {
        lista
      })
    } else {
      db.Category.findAll()
        .then(filterCategory => {

          let keywords = busqueda.trim().split(" ");

          let keywordsOR = []

          keywords.forEach(word => {
            keywordsOR.push({ name: { [Op.like]: `%${word}%` } })
            filterCategory.forEach(filterCat => {
              let posicion = filterCat.category.indexOf(word);
              let categoryId = filterCat.id
              if (posicion != "-1") {
                keywordsOR.push({ category_id: { [Op.like]: categoryId } })
              }
            })
          })

          db.Product.findAll({
            where: {
              [Op.or]: keywordsOR
            },
            include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
            { association: "capacities" }, { association: "images" }, { association: "rams" },
            { association: "sizes" }]
          })
            .then(productsFiltrados => {

              // Aca va el filtro para obtener los filtros
              var claves = []
              function obtenerFiltros(list) {

                list.forEach(objeto => {
                  let getKeys = Object.keys(objeto.dataValues);
                  for (var clave of getKeys) {
                    if (!claves.includes(clave) && clave != "order" && clave != "brand" && clave != "images" && clave != "category_id" && clave != "brand_id" && clave != "id" && clave != "name" && clave != "category" && clave != "price" && clave != "image" && clave != "description") {
                      claves.push(clave)
                    }
                  }
                })

                claves = claves.filter(clave => {
                  count = 0
                  list.forEach(producto => {
                    if (producto[clave] == null || producto[clave] == "" || producto[clave] == undefined) {
                      count++
                    }
                  })
                  if (count != list.length) {
                    return true
                  }
                })

                return claves

              }

              obtenerFiltros(productsFiltrados)

              res.render('listadoProductos', {
                lista: productsFiltrados,
                busqueda,
                claves,
                listado: "search"
              })
            })
        })

    }


   
  },
  categoria: (req, res) => {
    let categoria = req.params.categoria

    // let productsFiltrados = products.filter(product => product.category.toLowerCase() == categoria.toLowerCase())

    db.Product.findAll({
      where: {
        category_id: categoria
      },
      include: [{ association: "category" }, { association: "colores" }, { association: "brand" },
      { association: "capacities" }, { association: "images" }, { association: "rams" },
      { association: "sizes" }]
    })
      .then(productsFiltrados => {

        if (productsFiltrados.length == 0) {
          res.render('listadoProductos', {
            lista: productsFiltrados,
            listado: "category"
          })
        } else {
          // Aca va el filtro para obtener los filtros
          var claves = []
          function obtenerFiltros(list) {

            list.forEach(objeto => {
              let getKeys = Object.keys(objeto.dataValues);
              for (var clave of getKeys) {
                if (!claves.includes(clave) && clave != "order" && clave != "brand" && clave != "images" && clave != "category_id" && clave != "brand_id" && clave != "id" && clave != "name" && clave != "category" && clave != "price" && clave != "image" && clave != "description") {
                  claves.push(clave)
                }
              }
            })

            claves = claves.filter(clave => {
              count = 0
              list.forEach(producto => {
                if (producto[clave] == null || producto[clave] == "" || producto[clave] == undefined) {
                  count++
                }
              })
              if (count != list.length) {
                return true
              }
            })

            return claves

          }

          obtenerFiltros(productsFiltrados)

          res.render('listadoProductos', {
            lista: productsFiltrados,
            busqueda: productsFiltrados[0].category.dataValues.category,
            claves,
            listado: "category"
          })
        }
      })



  }
}
