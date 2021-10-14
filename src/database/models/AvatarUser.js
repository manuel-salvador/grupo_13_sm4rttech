module.exports = function(sequelize, dataTypes){
    let alias = "Capacity";
    let cols = {

    }
    let config = {
        avatar_id:{
            type: dataTypes.STRING(100)
        },

    }
    const Capacity = sequelize.define(alias, cols, config)
    return Capacity
}