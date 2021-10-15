module.exports = function(sequelize, dataTypes){
    let alias = "RamProduct";
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
    const RamProduct = sequelize.define(alias, cols, config)

    RamProduct.associate = modelos => {
        
        RamProduct.belongsTo(modelos.Ram, {
            as:'ramName',
            foreignKey:'ram_id',
            through: 'ram_products',
            timestamps: false
        })

        RamProduct.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'ram_products',
            timestamps: false
        })
        
    }

    return RamProduct
}