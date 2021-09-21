const { users } = require('../data/dataBase');

module.exports = (req, res, next) => {
    if(req.cookies.email && !req.session.user){
        let usuarioEncontrado = users.find(user => req.cookies.email == user.email);

        req.session.user = usuarioEncontrado
    }
    next()
}