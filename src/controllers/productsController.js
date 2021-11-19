const db = require('../database/models')
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
      .then(product => {
        res.render('detalleDeProducto', { product })
      })
  },
  buscar: (req, res) => {
    let busqueda = req.query.buscar

    let lista = []
    
    if (!busqueda) {
        res.render('listadoProductos', {
          lista
        })
      } else {
        if (productsFiltrados.length == 0) {
          res.render('listadoProductos', {
            lista: productsFiltrados
          })
        }

        /* let keywords = busqueda.split(" ");

        db.forEach(producto => {

          let order = 0;
          var nombre = producto.name.toLowerCase().split(" ");

          for (var word of keywords) {
            for (var palabra of nombre) {
              if (palabra == word.toLowerCase()) {
                order += 5
              } else if (palabra.includes(word.toLowerCase())) {
                order++
              }
            }
          }

          if (order > 0) {
            lista.push({ order: order, ...producto })
          }

        })

        lista.sort((a, b) => b.order - a.order) */
      }

      return lista;


    // Aca va el filtro para obtener los filtros
    var claves = []
    function obtenerFiltros(list) {

      list.forEach(objeto => {
        let getKeys = Object.keys(objeto);

        for (var clave of getKeys) {
          if (!claves.includes(clave) && clave != "order" && clave != "id" && clave != "name" && clave != "category" && clave != "price" && clave != "image" && clave != "description") {
            claves.push(clave)
          }
        }

      })


      claves = claves.filter(clave => {
        count = 0
        lista.forEach(producto => {
          if (producto[clave] == null || producto[clave] == "" || producto[clave] == undefined) {
            count++
          }
        })
        if (count != lista.length) { return true }
      })

      return claves
    }

    obtenerFiltros(lista)

    !busqueda ? busqueda = "Todos los productos" : "";

    //renderizo vista    
    res.render('listadoProductos', {
      lista,
      busqueda,
      claves
    })
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
            lista: productsFiltrados
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
            claves
          })
        }
      })



  }
}