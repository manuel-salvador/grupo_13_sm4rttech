module.exports = function(sequelize, dataTypes){
    let alias = "Ram_Product";
    let cols = {
        ram_product_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        ram_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        product_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "ram_products",
        timestamps: false
    }
    const Ram_Product = sequelize.define(alias, cols, config)

    Ram_Product.associate = modelos => {
        
        Ram_Product.belongsTo(modelos.Ram, {
            as:'ramName',
            foreignKey:'ram_id',
            through: 'ram_products',
            timestamps: false
        })

        Ram_Product.belongsTo(modelos.Product, {
            as:'product',
            foreignKey:'product_id',
            through: 'ram_products',
            timestamps: false
        })
        
    }

    return Ram_Product
}