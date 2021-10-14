module.exports = function(sequelize, dataTypes){
    let alias = "Rol";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        discount: {
            type: dataTypes.INTEGER(11),
        },
        description: {
            type: dataTypes.STRING(800),
        },
        subcategoryId: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "Rols", //No hace falta
        timestamps: true
    }

    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = models => {
        Rol.belongsTo(models.Subcategory, {
            as: "subcategory",
            foreignKey: "subcategoryId"
        })
        Rol.hasMany(models.RolImage, {
            as: "images",
            foreignKey: "RolId"
        })
    }

    return Rol
}