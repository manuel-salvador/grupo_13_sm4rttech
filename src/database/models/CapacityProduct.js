module.exports = function(sequelize, dataTypes){
    let alias = "Capacity_Product";
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
    const Capacity_Product = sequelize.define(alias, cols, config)

    Capacity_Product.associate = modelos => {
        
        Capacity_Product.belongsTo(modelos.Capacity, {
            as:'capacityName',
            foreignKey:'capacity_id',
            through: 'capacity_products',
            timestamps: false
        })

        Capacity_Product.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'capacity_products',
            timestamps: false
        })
        
    }

    return Capacity_Product
}