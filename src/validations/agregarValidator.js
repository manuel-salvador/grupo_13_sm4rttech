let { check } = require('express-validator');


module.exports = [
    check('category')
    .notEmpty()
    .withMessage("Se debe seleccionar una categoria"),

    check('marca')
    .notEmpty()
    .withMessage("Se debe seleccionar una marca"),

    check('price')
    .notEmpty()
    .withMessage("Debe asignar un precio")
    .isNumeric()
    .withMessage("Debe ingresar un numero"),

    check('name')
    .notEmpty()
    .withMessage("Se debe asignar un nombre al producto")
    .isLength({min: 4})
    .withMessage("El nombre es demasiado corto"),
    
    check('description')
    .notEmpty()
    .withMessage("Se debe ingresar una descripción")
    .isLength({min: 4})
    .withMessage("El nombre es demasiado corto"),


]