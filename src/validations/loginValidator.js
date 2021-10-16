const { check, body } = require('express-validator')
const db=require("../database/models")
let bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

  
    body("login")
    .custom((value, { req }) => {/*genera una propiedad */
        return db.User.findOne({
          where: {                  /**encuentra usuario */
            email: req.body.email,
          },
        })
          .then((user) => {   
            if (req.body.pass != user.dataValues.pass) {  /*compara la contraseña del body y la de la base de datos*/
              return Promise.reject("No coiciden las contraseñas");
            }
          })
          .catch((error) => {
            return Promise.reject("Credenciales inválidas");
          });
      }),

   ]
   