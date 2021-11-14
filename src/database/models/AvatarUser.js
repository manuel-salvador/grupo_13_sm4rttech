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
      tablename:"avatar_user",
      timestamps: false
     
    }
    const Avatar_user = sequelize.define(alias, cols, config)
      Avatar_user.associate=models=>{
         Avatar_user.belongsTo(models.User,{
            as:"user",
            foreignKeyy:"user_id"
            
        })
        }
    return Avatar_user
}