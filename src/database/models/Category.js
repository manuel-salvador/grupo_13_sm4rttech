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

    }
    let config = {

    }
    const Category = sequelize.define(alias, cols, config)
    return Category
}