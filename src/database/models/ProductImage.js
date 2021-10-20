module.exports = function(sequelize, dataTypes){
    let alias = "Product_Image";
    let cols = {
        image_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tableName: "product_images",
        timestamps: false

    }
    const Product_Image = sequelize.define(alias, cols, config)

    Product_Image.associate = models => {
        Product_Image.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id"
        })
    }
    return Product_Image
}