module.exports = function(sequelize, dataTypes){
    let alias = "Address";
    let cols = {
        address_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
        },
        address: {
            type: dataTypes.STRING(100)
            
        },
        pais: {
            type: dataTypes.STRING(100)
        },
        province: {
            type: dataTypes.STRING(255)
        },
        localidad: {
            type: dataTypes.STRING(255)
        },
        cp: {
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
            foreignKey:"address_id"
            
        })
    }
    return Address
}

  

    
