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
            type: dataTypes.STRING(50),
        },
        capacity: {
            type: dataTypes.INTEGER(11),
        },
        size_product: {
            type: dataTypes.INTEGER(11),
        },
        smart_product: {
            type: dataTypes.INTEGER(2),
        },
        ram_product: {
            type: dataTypes.INTEGER(11),
        },
        color: {
            type: dataTypes.INTEGER(11),
        },
        description: {
            type: dataTypes.STRING(800),
        },
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
        })
        Product.belongsTo(models.Ram, {
            as: "ram",
            foreignKey: "ram_id"
        })

        Product.hasMany(models.ProductImage, {
            as: "images",
            foreignKey: "image_id"
        })
    }

    return Product
}