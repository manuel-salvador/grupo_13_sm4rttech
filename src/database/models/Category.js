module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(15),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }

    }
    let config = {

    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = models => {
        Category.belongsTo(models.Product, {
            as: "category_id",
            foreignKey: "category_id"
        })
    }


    return Category
}