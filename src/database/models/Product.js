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
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        brand_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        smart: {
            type: dataTypes.BOOLEAN
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

        Product.belongsToMany(modelos.Capacity, {
            as: "capacities",
            through: "capacity_products",
            foreignKey: "product_id",
            otherKey: "capacity_id",
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
        })

        Product.belongsTo(modelos.Brand, {
            as: "brand",
            foreignKey: "brand_id",
        })

        Product.hasMany(modelos.CapacityProduct, {
            as: "capacity",
            foreignKey: "capacity_id"
        })

        Product.hasMany(modelos.ProductImage, {
            as: "image",
            foreignKey: "product_id"
        })
    }

    return Product
}