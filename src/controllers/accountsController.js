const { users, writeUserJSON } = require('../data/dataBase');
const { validationResult } = require('express-validator')


module.exports = {
    login: (req, res) => {
        res.render('login')
        
    },

    recuperarcontra: (req, res) => {
            res.render('recuperarcontra')
    },

    register: (req, res) => {
            res.render('register')
    },
    processRegister: (req, res) => {
        let errors = validationResult(req)

        if (errors.isEmpty()) {
            let lastId = 1;

            users.forEach(user => {
                if(user.id > lastId){
                    lastId = user.id
                }
            }) 

            const {
                name,
                lastname,
                email,
                pass
            } = req.body;

            let newUser = {
                id : lastId + 1,
                name,
                lastname,
                email,
                pass : pass,
                rol: "ROL_USER"
            }

            users.push(newUser);

            writeUserJSON(users)

            res.redirect('login')


        } else {
            res.render('register', {
                errors : errors.mapped(),
                old: req.body
            })
        }

    }
        
            
        
}