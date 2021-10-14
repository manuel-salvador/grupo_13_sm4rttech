module.exports = function(sequelize, dataTypes){
    let alias = "sizeProduct";
    let cols = {
        size_product_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        size_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "size_products",
        timestamps: false
    }
    const sizeProduct = sequelize.define(alias, cols, config)

    sizeProduct.associate = modelos => {
        
        sizeProduct.belongsTo(modelos.size, {
            as:'sizeName',
            foreignKey:'size_id',
            through: 'size_products',
            timestamps: false
        })

        sizeProduct.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'size_products',
            timestamps: false
        })
        
    }

    return sizeProduct
}