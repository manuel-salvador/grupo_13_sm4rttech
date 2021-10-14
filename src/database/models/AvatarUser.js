module.exports = function(sequelize, dataTypes){
    let alias = "Avatar_user";
    let cols = {
        avatar_id:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        avatarUsuario:{
            type: dataTypes.STRING(255),
           
        },
        user_id:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false 

        },    
        }

    
    let config = {
        avatar_id:{
            type: dataTypes.STRING(100)
        },

    }
    const Avatar_user = sequelize.define(alias, cols, config)
      Avatar_user.associate=models=>{
         Avatar_user.hasMany(models.User,{
            as:"user",
            foreingnKey:"avatar_user_fk"
            
        })
        }
    return Avatar_user
}