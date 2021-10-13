module.exports = function(sequelize, dataTypes){
    let alias = "ProductImage";
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
    const PeoductImage = sequelize.define(alias, cols, config)

    ProductImages.associate = models => {
        ProductImages.belongsTo(models.Product, {
            as: "product",
            foreignKey: "product_id"
        })
    }
    return PeoductImage
}