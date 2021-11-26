const { check, body } = require('express-validator')
const db = require("../database/models")



module.exports = [
  body('name')
    .custom((value) => {
      regexName = /^[a-zA-Z]{2,}$/
      return regexName.test(value)
    })
    .withMessage('Introduzca un nombre valido'),

  check('lastname')
    .notEmpty()
    .withMessage("ingresa tu apellido"),

  check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

  body('email')
    .custom(value => {
      return db.User.findOne({   /* */
        where: {                      /*busca el usuario en la base de datos*/
          email: value
        }
      })
        .then(user = {
          if(user) {
            return Promise.reject("ya existe este mail")/*si se encuentra el usuario retorna error */
          }
        })
    }),


  check('pass1')
    .notEmpty()
    .withMessage("Ingresa tu contraseña")
    .isLength({
      min: 6
    })
    .withMessage("La contraseña es demasiado corta"),

  body('pass2')
    .custom((value, { req }) => value !== req.body.pass1 ? false : true)
    .withMessage("Las contraseñas no coinciden"),

  check('terms')
    .isString('on')
    .withMessage("Debes aceptar los terminos y condiciones")
]
