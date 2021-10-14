module.exports = function(sequelize, dataTypes){
    let alias = "size";
    let cols = {
        color_id: {
            type: dataTypes.INTEGER(11),
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        size: {
            type: dataTypes.STRING(30),
            unique: true
        }
    }
    let config = {
        tablename: "sizes",
        timestamps: false
    }
    const size = sequelize.define(alias, cols, config)

    size.associate = modelos =>{
        size.belongsToMany(modelos.Product, {
            as:"size",
            through:"size_products",
            foreignKey:"size_id",
            otherKey:"product_id",
            timestamps: false
        })

        size.hasMany(modelos.sizeProduct, {
            as:'sizeName',
            foreignKey:'size_id',
        })
    }

    return size
}