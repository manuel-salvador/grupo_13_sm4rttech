module.exports = function(sequelize, dataTypes){
    let alias = "Rol";
    let cols = {
        rol_id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_type:{
            type: dataTypes.STRING(50),
            primaryKey: true,
            allowNull: false

        }

        }
        
    let config = {
        tableName: "Rols", //No hace falta
        timestamps: true
    }

    const Rol = sequelize.define(alias, cols, config)

    Rol.associate = models => {
        Rol.belongsTo(models.User, {
            as:"user",
            foreignKey:"rol"
                    
        })
        
    }

    return Rol
}