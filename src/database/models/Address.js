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
        cp: {
            type: dataTypes.STRING(255)
        },
        userId:{
            type:dataTypes.INTEGER(11),
            allowNull:false
        }
      
    }
    
    let config = {
        tableName: "addresses",
        timestamps: false
    }
    const Address = sequelize.define(alias, cols, config)
    Address.associate=models=>{
        Address.hasMany(models.User,{
            as:"user",
            foreingnKey:"userId"
            
        })
    }
    return Address
}

  

    
