module.exports = function(sequelize, dataTypes){
    let alias = "Ram";
    let cols = {
        ram_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ram: {
            type: dataTypes.VARCHAR(5).UNSIGNED,
            allowNull: false
        }

    }
    let config = {
        timestamps: true
    }
    const Ram = sequelize.define(alias, cols, config)

    Ram.associate = models => {
        Ram.belongsTo(models.Products, {
            as: "ram",
            foreignKey: "ram_product"
        })
    }


    return Ram
}