module.exports = function(sequelize, dataTypes){
    let alias = "Ram";
    let cols = {
        ram_id: {
            type: dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        ram: {
            type: dataTypes.STRING(30),
            unique: true
        }
    }
    let config = {
        tablename: "rams",
        timestamps: false
    }
    const Ram = sequelize.define(alias, cols, config)

    Ram.associate = modelos =>{
        Ram.belongsToMany(modelos.Product, {
            as:"product",
            through:"ram_products",
            foreignKey:"ram_id",
            otherKey:"product_id",
            timestamps: false
        })

        Ram.hasMany(modelos.Ram_Product, {
            as:'ramName',
            foreignKey:'ram_id',
        })
    }

    return Ram
}