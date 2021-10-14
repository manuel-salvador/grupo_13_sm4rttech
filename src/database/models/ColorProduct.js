module.exports = function(sequelize, dataTypes){
    let alias = "ColorProduct";
    let cols = {
        color_product_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        color_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "color_products",
        timestamps: false
    }
    const ColorProduct = sequelize.define(alias, cols, config)

    ColorProduct.associate = modelos => {
        
        ColorProduct.belongsTo(modelos.Color, {
            as:'colorName',
            foreignKey:'color_id',
            through: 'color_products',
            timestamps: false
        })

        ColorProduct.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'color_products',
            timestamps: false
        })
        
    }

    return ColorProduct
}