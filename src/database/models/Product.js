module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "products", //No hace falta
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = modelos => {
        Product.belongsToMany(modelos.Color, {
            as:"colores",
            through:"color_products",
            foreignKey:"product_id",
            otherKey:"color_id",
            timestamps: false
        })

        Product.hasMany(modelos.ColorProduct, {
            as: "product",
            foreignKey: "product_id",
            timestamps: false
        })
        Product.belongsTo(modelos.Category, {
            as: "category",
            foreignKey: "category_id",
            timestamps: false
        })
    }

    return Product
}