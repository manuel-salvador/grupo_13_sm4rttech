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
    profile: (req, res) => {
            db.User.findByPk(req.session.user.id,{  
             include:[{association:"direccion"}, {association:"fecha"}]  
            }).then((user)=>{
              res.render("profile",{
                user,
                session:req.session,
              });
            });
    },
    editProfile:(req,res)=>{
      db.User.findByPk(req.session.user.id,{  /*trae el usuario de la base de datos */
      include:[{association:"direccion"}, {association:"fecha"}]  
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
          let{name,last_name,localidad,cp,address,province,pais, date}=req.body

            db.User.update({
              name,                       
              last_name,
              avatar:req.file?req.file.filename:req.session.user.avatar
            },{
              where:{
                id:req.params.id
              }
            })
            .then(()=>{
              db.User.findOne({
                where:{
                  id:req.params.id
                }
              })
            .then(user => {
              if(user.address_id){
                db.Address.update({
                  address,
                  province,
                  localidad,
                  pais,
                  cp
                },{
                  where:{
                   address_id:user.address_id
                  }
                })              
              } else {
                db.Address.create({
                  address,
                  province,
                  localidad,
                  cp,
                  pais
                })
                .then(direccion=>{
                  db.User.update({
                    address_id:Number(direccion.address_id) //acutualiza el null
                  },{
                    where:{
                       id:req.params.id
                  }
                  })
                })
              } 

              if(user.dates){
                db.Date.update({
                  date_user: date
                },{
                  where: {
                    date_id: user.dates
                  }
                })
              } else {
                db.Date.create({
                  date_user: date
                })
                .then(fecha => {
                  db.User.update({
                    dates: Number(fecha.date_id) //acutualiza el null
                  },{
                    where:{
                       id:req.params.id
                    }
                  })
                })
              }

              req.session.user = {
                id: user.id,
                name: user.name,
                lastname: user.last_name,
                email: user.email,
                avatar: user.avatar
              };
                res.locals.user = req.session.user;

                setTimeout(function () {
                  res.redirect("/accounts/profile");
                }, 2000)
              });

        });

             }else{
            res.render("editProfile",{
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
                  res.cookie('email', user.email, {maxAge: 3600000*24})
                  
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
                    rol:1,
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

    },
    deleteUser: (req, res) => {
      req.session.destroy();
        if(req.cookies.email){
            res.cookie('email','',{maxAge:-1})
            res.locals.user = ""
        }

        db.User.findByPk(req.params.id)
        .then(usuario => {

          db.User.destroy({
            where:{
              id: req.params.id
            }
          })

          db.Date.destroy({
            where: {
              date_id: usuario.dates
            }
          })

          db.Address.destroy({
            where: {
              address_id: usuario.address_id
            }
          })

          return res.redirect('/') 
        })



    }
}
    
    


      
    
        
