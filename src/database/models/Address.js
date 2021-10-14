module.exports = function(sequelize, dataTypes){
    let alias = "Address";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        province: {
            type: dataTypes.STRING(255)
        },
        localidad: {
            type: dataTypes.STRING(255)
        },
        postal_code: {
            type: dataTypes.STRING(255)
        },
      
    }
    
    let config = {
        tableName: "addresses",
        timestamps: false
    }
    const Address = sequelize.define(alias, cols, config)
    Address.associate=models=>{
        Address.hasMany(models.User,{
            as:"user",
            foreingnKey:"address"
            
        })
    }
    return Address
}

  

    
