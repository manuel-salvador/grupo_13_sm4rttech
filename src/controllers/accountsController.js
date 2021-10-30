const { validationResult, body } = require('express-validator')
let bcrypt = require('bcryptjs')
let db = require("../database/models");
const User = require('../database/models/User');

module.exports = {
    login: (req, res) => {
        res.render('login',{
          session:req.session,
        });
        
    },

    recuperarcontra: (req, res) => {
            res.render('recuperarcontra')
    },

    editProfile: (req, res) =>{
        res.render('editProfile')
        
    },

    profile: (req, res) => {
                 
  
            db.User.findByPk(req.session.user.id).then((user)=>{
            
              db.Address.findOne({
                where:{
                  address_id:user.address_id,
                }
              }).then((address) => {
                res.render("profile",{
                  session:req.session,
                  user,
                  address,
                });
              });
            }) ;
   
    },
    editProfile: (req, res) => {
    /*  db.Users.findByPk(req.params.id).then((user) => {
        db.Addresses.findOne({
          where: {
            userId: user.id,
          },
        }).then((address) => {
          res.render("editProfile", {
            user,
            session: req.session,
            address
          });
        });
      });
    },*/

      db.User.findByPk(req.session.user.id,{  /*trae el usuario de la base de datos */
      include:[{association:"direccion"}]  
     }).then((user)=>{  
    
        res.render("editProfile",{
          user,
          session:req.session
        });
      });
    },
    updateProfile:(req,res)=>{
        let errors= validationResult(req)

        if(errors.isEmpty()){
          let{name,last_name,localidad,cp,province,pais}=req.body
          db.User.update( /*verifica  */
          {
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
              
              res.redirect("profile")
                       
               
          })
        }else{
            res.render("/editProfile",{
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
                  email: req.body.email,    /*trae el mail que coincida con el mail del body */
                }
              })
              .then((user) => {
                req.session.user = {
                id:user.id,
                name:user.name,
                lastname:user.last_name,
                email:user.email,
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

            db.User.create({    /*trae la base de datos*/
                    name,
                    last_name: lastname,
                    email,
                    pass : bcrypt.hashSync(pass1, 12),
                    avatar : "default-user-profile.png", 
                    rol:2,
            }) 
              .then(() => {
                res.redirect("/accounts/login");
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
    
    


      
    
        
