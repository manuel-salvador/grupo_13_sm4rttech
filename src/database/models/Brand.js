module.exports = function(sequelize, dataTypes){
    let alias = "Brand";
    let cols = {
        brand_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }
    let config = {
        tableName: "brands",
        timestamps: false
    }
    const Brands = sequelize.define(alias, cols, config)

    Brands.associate = modelos => {
        Brands.hasMany(modelos.Product, {
            as: "product",
            foreignKey: "brand_id"
        })
    }

    return Brands
}