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
        let user = users.find(user=>user.id===req.session.user.id)
          res.render("profile", {
          
          user
         
            })
          
      /* user = users.find(user => user.id === +req.params.id)
		res.render('profile', {
			user
		})*/
    },
    profileEdit:(req,res)=>{
        let user=users.find(user=>user.id=== +req.params.id)

        res.render("userProfileEdit",{
            user,
            session:req.session
        })

    },
    updateProfile:(req,res)=>{
        let errors= validationResult(req)
        if(errors.isEmpty()){
            let user=users.find(user=>user.id=== +req.params.id) 
            let {
                
                name,                       
                lastname,
                localidad,
                cp,
                province,
                }=req.body
            
            user.name=name
            user.lastname=lastname
            user.pais=pais
            user.localidad=localidad
            user.pc=pc
            user.province=province
            user.avatar=req.file ? req.file.filename:user.avatar
            console.log(user)

            writeUserJSON(users)
            delete user.pass
            req.session.user= user
            res.redirect("profile")

        }else{
            res.render("userProfileEdit",{
                errors:errors.mapped(),
                old:req.body,
                session:req.session
            })

        }


    },
    processLogin:(req,res)=>{
        let errors= validationResult(req)
        if(errors.isEmpty()){

            let user=users.find(user=>user.email===req.body.email)/*traer el usuario q coincida con el mail*/

             /*se crea la session*/
            req.session.user={
                id:user.id,
                name:user.name,
                lastname:user.lastname,
                email:user.email,
                pais: user.pais,
                province:user.province,
                localidad:user.localidad,
                cp:user.cp,
                avatar:user.avatar,
                rol:user.rol    /**a q rutas puede entrar o no el usuario */
            }

            if(req.body.recordarme){
                res.cookie('email', user.email, {maxAge: 3600000*4})
            }

            //res.locals.user = req.session.user    /**se pasa a local los datos del usuario por si lo necesita alguna de las vistas */
            
            res.redirect("/")

        }else{
            res.render('login', {
            errors : errors.mapped(),
          
        })
 
        }
    },
    logout: (req,res) => {
        req.session.destroy();
        if(req.cookies.email){
            res.cookie('email','',{maxAge:-1})
            res.locals.user = ""
        }
        
        return res.redirect('/')
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
                avatar : req.file ? req.file.filename : "/UserAvatar/default-user-profile.png",
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