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
            type: dataTypes.STRING(200),
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(3),
            allowNull: false
        },
        dates: {
            type: dataTypes.INTEGER(11),
                      
        },
        address_id: {
            type: dataTypes.INTEGER(11),
                       
        },
        avatar:{
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        tableName: "users", 
        timestamps: false

    }
    const User = sequelize.define(alias, cols, config)
    User.associate = models => {
        User.belongsTo(models.Address,{
            as:"direccion",
            foreignKey:"address_id"
        })

        User.belongsTo(models.Date, {
            as:"fecha",
            foreignKey: "dates"
        })
       
    }
    return User;
    }

  

      


  
