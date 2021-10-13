module.exports = function(sequelize, dataTypes){
    let alias = "Capacity";
    let cols = {
        capacity_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        capacity: {
            type: dataTypes.STRING(10),
            allowNull: false
        },

    }
    let config = {
        tablename: "capacities"

    }
    const Capacity = sequelize.define(alias, cols, config)

    Capacity.associate = models => {
        Capacity.belongsTo(models.capacity_product, {
            as: "category",
            foreignKey: "capacity_id"
        })
    }

    return Capacity
}