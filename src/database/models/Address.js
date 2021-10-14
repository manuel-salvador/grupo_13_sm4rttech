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
            type: dataTypes.VARCHAR(255)
        },
        localidad: {
            type: dataTypes.VARCHAR(255)
        },
        postal_code: {
            type: dataTypes.VARCHAR(255)
        },
      /*  userId: {
            type: dataTypes.INTEGER,
            allowNull: false
        },*/
    }
    
    let config = {
        tableName: "addresses",
        timestamps: false
    }
    const Address = sequelize.define(alias, cols, config)
    Address.associate=models=>{
        Address.belongsTo(models.User,{
            as:"user",
            
        })
    }
    return Address
}

  

    
