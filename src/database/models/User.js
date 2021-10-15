module.exports = function(sequelize, dataTypes){
    let alias = "User";
    let cols = {

        id: {   
            type: dataTypes.INTEGER(11).UNSIGNED,    
            primaryKey: true,
            autoIncrement: true,
            allowNull: false   /*acepta nulos?*/
            
        },
        name : {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(150),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(150),
            allowNull: false,
            unique:true

        },
        pass: {
            type: dataTypes.STRING(12),
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        },
        dates: {
            type: dataTypes.INTEGER(11),
                      
        },
      /*  address: {
            type: dataTypes.INTEGER(11),
                       
        },*/
        
             
        

    }
    let config = {
        tableName: "users", 
        timestamps: false

    }
    const User = sequelize.define(alias, cols, config)
    User.associate = models => {
        User.belongsTo(models.Address,{
            as:"direccion",
            foreingnKey:"address"
        })
        User.hasMany(models.Avatar_user,{
            as:"avatar",
            foreingnKey:"user_id"
        })
    }
    return User;
    }

  

      


  
