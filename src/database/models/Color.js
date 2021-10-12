module.exports = function(sequelize, dataTypes){
    let alias = "Color";
    let cols = {
        color_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        color: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
    }
    let config = {

    }
    const Color = sequelize.define(alias, cols, config)
    return Color
}