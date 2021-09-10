const { check, body } = require('express-validator')

module.exports = [
    check('name')
    .notEmpty()
    .withMessage("Ingresa tu nombre"),

    check('lastname')
    .notEmpty()
    .withMessage("ingresa tu apellido"),

    check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

    body('email2')
    .custom((value, {req}) => value !== req.body.email ? false : true)
    .withMessage("Los Emails no coinciden"),

    check('pass')
    .notEmpty()
    .withMessage("Ingresa tu contraseña")
    .isLength({
        min: 6
    })
    .withMessage("La contraseña es demasiado corta"),

    body('pass2')
    .custom((value, {req}) => value !== req.body.pass ? false : true)
    .withMessage("Las contraseñas no coinciden")
]