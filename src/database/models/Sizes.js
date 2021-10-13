module.exports = function(sequelize, dataTypes){
    let alias = "Size";
    let cols = {
        size_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sizes: {
            type: dataTypes.STRING(255),
            allowNull: false
        },

    }
    let config = {
        tablename: "sizes"

    }
    const Size = sequelize.define(alias, cols, config)

    Size.associate = models => {
        Size.belongsTo(models.size_product, {
            as: "size",
            foreignKey: "size_id"
        })
    }

    return Size
}