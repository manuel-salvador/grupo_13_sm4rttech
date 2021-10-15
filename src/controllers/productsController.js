let { products } = require('../data/dataBase');
let productsTelevisores = products.filter(product => product.category.toLowerCase() === "televisores")
let productsCelulares = products.filter(product => product.category.toLowerCase() === "celulares")
let productsTablets = products.filter(product => product.category.toLowerCase() === "tablets")
let productsGaming = products.filter(product => product.category.toLowerCase() === "gaming")
let db = require("../database/models")

module.exports = {
  producto: (req, res) => {
    setTimeout(function () {
      res.render('products', {
        productsTelevisores,
        productsCelulares,
        productsGaming,
        productsTablets,
        products

      })
    }, 1000)
  },
  buscar: (req, res) => {
    let busqueda = req.query.buscar

    var lista = []
    function buscar(busqueda, db) {

      if(!busqueda){
        lista = db
        return lista;
      }else{

        
        let keywords = busqueda.split(" ");
        
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
      
      lista.sort((a, b) => b.order - a.order)
    }
    
    return lista;
    }
    
    buscar(busqueda, products)
    
    // Aca va el filtro para obtener los filtros
    var claves = []
    function obtenerFiltros (list){ 
    
     list.forEach(objeto => {
         let getKeys = Object.keys(objeto);
    
         for(var clave of getKeys){
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
      if(count != lista.length){return true}
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

    let productsFiltrados = products.filter(product => product.category.toLowerCase() == categoria.toLowerCase())

    // Aca va el filtro para obtener los filtros
    var claves = []
    function obtenerFiltros (list){ 
    
     list.forEach(objeto => {
         let getKeys = Object.keys(objeto);
    
         for(var clave of getKeys){
             if (!claves.includes(clave) && clave != "order" && clave != "id" && clave != "name" && clave != "category" && clave != "price" && clave != "image" && clave != "description") {
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
      if(count != list.length){return true}
     })
    
     return claves
    
    }

    obtenerFiltros(productsFiltrados)


    
    res.render('listadoProductos', {
      lista: productsFiltrados,
      busqueda: categoria,
      claves
    })

  }
}