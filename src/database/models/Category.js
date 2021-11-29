module.exports = function(sequelize, dataTypes){
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category: {
            type: dataTypes.STRING(15),
            allowNull: false,
            unique: true
        }
    }
    let config = {
        tablename: "categories",
        timestamps: false
    }
    const Category = sequelize.define(alias, cols, config)

    Category.associate = modelos => {
        Category.hasMany(modelos.Product, {
            as: "product",
            foreignKey: "category_id"
        })
    }

    return Category
}