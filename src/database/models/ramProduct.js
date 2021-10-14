module.exports = function(sequelize, dataTypes){
    let alias = "ramProduct";
    let cols = {
        ram_product_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ram_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "ram_products",
        timestamps: false
    }
    const ramProduct = sequelize.define(alias, cols, config)

    ramProduct.associate = modelos => {
        
        ramProduct.belongsTo(modelos.ram, {
            as:'ramName',
            foreignKey:'ram_id',
            through: 'ram_products',
            timestamps: false
        })

        ramProduct.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'ram_products',
            timestamps: false
        })
        
    }

    return ramProduct
}