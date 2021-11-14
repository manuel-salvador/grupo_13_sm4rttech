module.exports = function(sequelize, dataTypes){
    let alias = "Color_Product";
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
    const Color_Product = sequelize.define(alias, cols, config)

    Color_Product.associate = modelos => {
        
        Color_Product.belongsTo(modelos.Color, {
            as:'colorName',
            foreignKey:'color_id',
            through: 'color_products',
            timestamps: false
        })

        Color_Product.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'color_products',
            timestamps: false
        })
        
    }

    return Color_Product
}