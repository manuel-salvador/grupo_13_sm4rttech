module.exports = function(sequelize, dataTypes){
    let alias = "Size";
    let cols = {
        size_id: {
            type: dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        sizes: {
            type: dataTypes.STRING(30),
            unique: true
        }
    }
    let config = {
        tablename: "sizes",
        timestamps: false
    }
    const Size = sequelize.define(alias, cols, config)

    Size.associate = modelos =>{
        Size.belongsToMany(modelos.Product, {
            as:"product",
            through:"size_products",
            foreignKey:"size_id",
            otherKey:"product_id",
            timestamps: false
        })

        Size.hasMany(modelos.Size_Product, {
            as:'sizeName',
            foreignKey:'size_id',
        })
    }

    return Size
}