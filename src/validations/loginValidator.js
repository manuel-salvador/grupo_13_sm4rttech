const { check, body } = require('express-validator')
const db = require("../database/models")
let bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

  
      body("pass")
      .custom((value, { req }) => {/*genera una propiedad */
          return db.User.findOne({
            where: {                  /**encuentra usuario */
              email: req.body.email
            }
      })
      .then((user) => {  
        if(!bcrypt.compareSync(req.body.pass, user.dataValues.pass)){/**si no coinciden las contraseñas se genera un error*/
          return Promise.reject();
        }
      })
      .catch((error) => {
              return Promise.reject("Credenciales inválidas")
            })
        }),

   ]
   