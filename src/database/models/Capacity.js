module.exports = function(sequelize, dataTypes){
    let alias = "Capacity";
    let cols = {
        capacity_id: {
            type: dataTypes.INTEGER(11),
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
        tablename: "capacities",
        timestamps: false
    }
    const Capacity = sequelize.define(alias, cols, config)

    Capacity.associate = modelos => {

        Capacity.belongsToMany(modelos.Product, {
            as: "product",
            through: "capacity_products",
            foreignKey: "capacity_id",
            otherKey: "product_id",
            timestamps: false
        })

        Capacity.hasMany(modelos.Capacity_Product, {
            as: "capacityName",
            foreignKey: "capacity_id"
        })
    }

    return Capacity
}