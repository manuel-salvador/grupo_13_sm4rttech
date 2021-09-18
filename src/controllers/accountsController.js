const { users, writeUserJSON } = require('../data/dataBase');
const { validationResult, body } = require('express-validator')
let bcrypt = require('bcryptjs')


module.exports = {
    login: (req, res) => {
        res.render('login')
        
    },

    recuperarcontra: (req, res) => {
            res.render('recuperarcontra')
    },

    userProfile: (req, res) =>{
        res.render('userProfile')
    },

    profile: (req, res) => {
        let user = users.find(user => user.id === +req.params.id)
		res.render('profile', {
			user
		})
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

            let {
                name,
                lastname,
                email,
                pass1
            } = req.body;

            let newUser = {
                id : lastId + 1,
                name,
                lastname,
                date: "",
                email,
                pass : bcrypt.hashSync(pass1, 12),
                pais: "",
                province: "",
                localidad: "",
                cp: "",
                avatar : req.file ? req.file.filename : "logo-sm4rttech.png",
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