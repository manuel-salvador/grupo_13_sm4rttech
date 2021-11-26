const db = require('../database/models')

module.exports = (req, res, next) => {
    if(req.cookies.email && !req.session.user){
        // let usuarioEncontrado = users.find(user => req.cookies.email == user.email);
        db.User.findOne({
            where: {
                email: req.cookies.email
            }
        })
        .then( user => {
            req.session.user = {
                id:user.id,
                name:user.name,
                last_name:user.last_name,
                email:user.email,
                /*pais: user.pais,
                province:user.province,
                localidad:user.localidad,
                cp:user.cp,*/
                avatar:user.avatar,
                rol:user.rol    /**a q rutas puede entrar o no el usuario */
                };
        })
    }
    next()
}