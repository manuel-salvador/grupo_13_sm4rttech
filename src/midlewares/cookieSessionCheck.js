const { users } = require('../data/dataBase');

module.exports = (req, res, next) => {
    if(req.cookies.email && !req.session.user){
        let usuarioEncontrado = users.find(user => req.cookies.email == user.email);

        req.session.user = usuarioEncontrado

        res.locals.user = req.session.user    /**se pasa a local los datos del usuario por si lo necesita alguna de las vistas */
    }
    next()
}