module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price:{
            type: dataTypes.FLOAT,
            allowNull: false
        },
        brand: {
            type: dataTypes.INTEGER(11),
        },
        capacity: {
            type: dataTypes.INTEGER(11),
        },
        sizes: {
            type: dataTypes.INTEGER(11),
        },
        smart: {
            type: dataTypes.INTEGER(2),
        },
        ram: {
            type: dataTypes.INTEGER(11),
        },
        color: {
            type: dataTypes.INTEGER(11),
        },
        description: {
            type: dataTypes.STRING(800),
        },
        product_images: {
            type: dataTypes.INTEGER(11)
        }
    }
    let config = {
        tableName: "products", //No hace falta
        timestamps: true
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = models => {
        Product.belongsTo(models.Category, {
            as: "category",
            foreignKey: "category"
        }),
        Product.belongsTo(models.Ram, {
            as: "ram",
            foreignKey: "ram_product"
        }),
        Product.belongsTo(models.Brands, {
            as: "brand",
            foreignKey: "brand"
        }),
        Product.belongsTo(models.Capacity, {
            as: "capacity",
            foreignKey: "capacity"
        }),
        Product.belongsTo(models.Sizes, {
            as: "sizes",
            foreignKey: "sizes"
        }),
        Product.belongsTo(models.Color, {
            as: "color",
            foreignKey: "color"
        })
    }

    return Product
}