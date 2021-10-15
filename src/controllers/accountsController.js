const { validationResult, body } = require('express-validator')
let bcrypt = require('bcryptjs')
let db = require("../database/models")

module.exports = {
    login: (req, res) => {
        res.render('login',{
          session:req.session,
        });
        
    },

    recuperarcontra: (req, res) => {
            res.render('recuperarcontra')
    },

    userProfile: (req, res) =>{
        res.render('userProfile')
        
    },

    profile: (req, res) => {
            db.User.findBypk(req.session.user.id,{
             include:[{association:"direccion"}]  
            }).then((user)=>{
              res.render("userPrfile",{
                user,
                session:req.session,
              });
            });
          
   
    },
    profileEdit:(req,res)=>{
      db.User.findBypk(req.session.user.id,{  /*trae el usuario de la base de datos */
      include:[{association:"direccion"}]  
     }).then((user)=>{   
        res.render("userProfileEdit",{
          user,
          session:req.session
        });
      });
      
    },
    updateProfile:(req,res)=>{
        let errors= validationResult(req);

        if(errors.isEmpty()){
          /*let user=users.find(user=>user.email=== req.body.email) */
          let{name,last_name,localidad,cp,province,pais}=req.body
          db.User.update({ /*verifica  */
            name,                       
            last_name,
            localidad,
            cp,
            province,
            pais,
            avatar:req.file?req.file.filename:req.session.user.avatar
          },{
            where:{
              id:req.params.id
            }
          })
          .then(()=>{
            db.Address.create({
              address,
              province,
              localidad,
              cp
            })
          })
          .then(()=>{
            res.redirect("profile")
          })         
           
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
                lastname:user.last_name,
                email:user.email,
                /*pais: user.pais,
                province:user.province,
                localidad:user.localidad,
                cp:user.cp,*/
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
      
    
        
