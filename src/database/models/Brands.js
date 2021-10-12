module.exports = function(sequelize, dataTypes){
    let alias = "Brands";
    let cols = {
        brand_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

    }
    let config = {

    }
    const Brands = sequelize.define(alias, cols, config)
    return Brands
}