const { check, body } = require('express-validator')
const { users } =require('../data/dataBase')
let bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

    body('email')
    .custom(value => {
        let user = users.find(user => user.email === value)
        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage('Email no registrado')
    ,

    check('pass')
    .notEmpty()
    .withMessage("Ingresa tu contraseña"),

    body('pass')
    .custom((value, {req}) => {
        let user = users.find(user => user.email === value)
        if(user !== undefined){
            return true
        }else{
            return false
        }
    })
    .withMessage('Email no registrado')
]