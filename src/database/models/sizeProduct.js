module.exports = function(sequelize, dataTypes){
    let alias = "Size_Product";
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
    const Size_Product = sequelize.define(alias, cols, config)

    Size_Product.associate = modelos => {
        
        Size_Product.belongsTo(modelos.Size, {
            as:'sizeName',
            foreignKey:'size_id',
            through: 'size_products',
            timestamps: false
        })

        Size_Product.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'size_products',
            timestamps: false
        })
        
    }

    return Size_Product
}