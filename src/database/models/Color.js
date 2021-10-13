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
        tablename: "colors"

    }
    const Color = sequelize.define(alias, cols, config)

    Color.associate = models => {
        Color.belongsTo(models.color_product, {
            as: "color",
            foreignKey: "color_id"
        })
    }

    return Color
}