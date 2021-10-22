const { check, body } = require('express-validator')
const db=require("../database/models")
let bcrypt = require('bcryptjs')

module.exports = [
    check('email')
    .notEmpty()
    .withMessage("Debes ingresar tu Email registrado").bail()
    .isEmail()
    .withMessage("El Email es invalido"),

  
    body("custom")
    .custom((value, { req }) => {/*genera una propiedad  y dentro de esa propiedad, si hay errores se muestran en el pauete de errores del express validator */
        return db.User.findOne({
          where: {                  /**encuentra usuario */
            email: req.body.email
          }
        })
          .then((user) => {  
                                  /*se captura el resultado de la promesa*/
            if (!bcrypt.compareSync(req.body.pass,user.dataValues.pass)){   /*compara la contraseña del body y la de la base de datos*/
              return Promise.reject()}
            
          })
          .catch((error) => {
            return Promise.reject("Credenciales inválidas")
          })
      }),
      body("pass")
      .custom((value, { req }) => {/*genera una propiedad */
          return db.User.findOne({
            where: {                  /**encuentra usuario */
              email: req.body.email
            }
          })
            .then((user) => {  
               return (!bcrypt.compareSync(req.body.pass, user.dataValues.pass))/**si no coinciden las contraseñas se genera un error*/
                return Promise.reject();
              
            })
            .catch((error) => {
              return Promise.reject("Credenciales inválidas")
            })
        }),

   ]
   