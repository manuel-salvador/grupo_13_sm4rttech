const { validationResult, body } = require('express-validator')
let bcrypt = require('bcryptjs')
let db = require("../database/models")

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
            let user=users.find(user=>user.email=== req.body.email) 
            let {
                
                name,                       
                lastname,
                localidad,
                cp,
                province,
                pais
                }=req.body
            
            user.name=name
            user.lastname=lastname
            user.pais=pais
            user.localidad=localidad
            user.cp=cp
            user.province=province
            user.avatar=req.file ? req.file.filename:user.avatar
           

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
            db.User.findOne({
                where: {
                  email: req.body.email,
                },
              }).then((user) => {
                req.session.user = {
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
                };
        
                if(req.body.recordarme){
                  res.cookie('email', user.email, {maxAge: 3600000*4})
              }
                res.locals.user = req.session.user;
        
                res.redirect("/");
              });

        }else{
            res.render('login', {
            errors : errors.mapped(),
            session:req.session,
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
        if (req.fileValidatorError) {  /**validacion de imagen jpg */
            let image = {
              param: "image",
              msg: req.fileValidatorError,
            };
            errors.push(image);
          }
                /*creacion de usuario*/
        if (errors.isEmpty()) {

            let {name,lastname,email,pass1} = req.body;

            db.user.create({    /*trae la base de datos*/
                    name,
                    lastname,
                    email,
                    pass : bcrypt.hashSync(pass1, 12),
                    avatar : req.file ? req.file.filename : "/UserAvatar/default-user-profile.png", 
                    rol:0,
            }) 
              .then(() => {
                res.redirect("/users/login");
              })
              .catch((err) => console.log(err));


        } else {
            res.render("register", {
              errors: errors.mapped(),
              old: req.body,
              session: req.session,
            });
        }

    }
    }    
      
    
        
