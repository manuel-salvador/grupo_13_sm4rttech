module.exports = function(sequelize, dataTypes){
    let alias = "Brands";
    let cols = {

    }
    let config = {

    }
    const Brands = sequelize.define(alias, cols, config)
    return Brands
}