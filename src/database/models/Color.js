module.exports = function(sequelize, dataTypes){
    let alias = "Color";
    let cols = {
        color_id: {
            type: dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        color: {
            type: dataTypes.STRING(30),
            unique: true
        }
    }
    let config = {
        tablename: "colors",
        timestamps: false
    }
    const Color = sequelize.define(alias, cols, config)

    Color.associate = modelos =>{
        Color.belongsToMany(modelos.Product, {
            as:"product",
            through:"color_products",
            foreignKey:"color_id",
            otherKey:"product_id",
            timestamps: false
        })

        Color.hasMany(modelos.Color_Product, {
            as:'colorName',
            foreignKey:'color_id',
        })
    }

    return Color
}