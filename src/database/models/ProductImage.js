module.exports = function(sequelize, dataTypes){
    let alias = "ProductImage";
    let cols = {

    }
    let config = {

    }
    const PeoductImage = sequelize.define(alias, cols, config)
    return PeoductImage
}