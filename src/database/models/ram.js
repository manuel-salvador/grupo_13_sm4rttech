module.exports = function(sequelize, dataTypes){
    let alias = "ram";
    let cols = {
        color_id: {
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
    const ram = sequelize.define(alias, cols, config)

    ram.associate = modelos =>{
        ram.belongsToMany(modelos.Product, {
            as:"product",
            through:"ram_products",
            foreignKey:"ram_id",
            otherKey:"product_id",
            timestamps: false
        })

        ram.hasMany(modelos.ramProduct, {
            as:'ramName',
            foreignKey:'ram_id',
        })
    }

    return ram
}