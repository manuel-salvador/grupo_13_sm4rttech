module.exports = function(sequelize, dataTypes){
    let alias = "SizeProduct";
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
    const SizeProduct = sequelize.define(alias, cols, config)

    SizeProduct.associate = modelos => {
        
        SizeProduct.belongsTo(modelos.Size, {
            as:'sizeName',
            foreignKey:'size_id',
            through: 'size_products',
            timestamps: false
        })

        SizeProduct.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'size_products',
            timestamps: false
        })
        
    }

    return SizeProduct
}