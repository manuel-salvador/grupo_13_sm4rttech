module.exports = function(sequelize, dataTypes){
    let alias = "CapacityProduct";
    let cols = {
        capacity_product_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        capacity_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "capacity_products",
        timestamps: false
    }
    const CapacityProduct = sequelize.define(alias, cols, config)

    CapacityProduct.associate = modelos => {
        
        CapacityProduct.belongsTo(modelos.Capacity, {
            as:'capacityName',
            foreignKey:'capacity_id',
            through: 'capacity_products',
            timestamps: false
        })

        CapacityProduct.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'capacity_products',
            timestamps: false
        })
        
    }

    return CapacityProduct
}