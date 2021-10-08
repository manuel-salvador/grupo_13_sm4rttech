module.exports = function(sequelize, dataTypes){
    let alias = "Color";
    let cols = {

    }
    let config = {

    }
    const Color = sequelize.define(alias, cols, config)
    return Color
}