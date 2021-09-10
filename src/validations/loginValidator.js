const { check } = require('express-validator')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

    check('pass')
    .notEmpty()
    .withMessage("Ingresa tu contraseña")
]