module.exports = function(sequelize, dataTypes){
    let alias = "Date";
    let cols = {

    }
    let config = {

    }
    const Date = sequelize.define(alias, cols, config)
    return Date
}