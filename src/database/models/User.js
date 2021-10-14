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
            type: dataTypes.VARCHAR(150).UNSIGNED,
            allowNull: false
        },
        last_name: {
            type: dataTypes.VARCHAR(150).UNSIGNED,
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR(150).UNSIGNED,
            allowNull: false,
            unique:true

        },
        pass: {
            type: dataTypes.VARCHAR(12).UNSIGNED,
            allowNull: false
        },
        rol: {
            type: dataTypes.INTEGER(3).UNSIGNED,
            allowNull: false
        },
        dates: {
            type: dataTypes.INTEGER(11).UNSIGNED,
                      
        },
        address: {
            type: dataTypes.INTEGER(11).UNSIGNED,
           
        },
        
             
        

    }
    let config = {
        tableName: "user", 
        timestamps: true

    }
    const User = sequelize.define(alias, cols, config)
    User.associate = models => {
        User.belongsTo(models.address,{
            as:"addreses",
            foreingnKey:"userId"
        })
    }
    return User;
    }

  

      


  
