module.exports = function(sequelize, dataTypes){
    let alias = "Date";
    let cols = {
        date_id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false 
     },
        date_user:{
            type:dataTypes.DATE,
            unique:true
        }

    }
    let config = {
        tableName: "dates",   
        timestamps: false

    }
    const Date = sequelize.define(alias, cols, config)
    Date.associate=models=>{
        Date.hasMany(models.User,{
            as:"user",
            foreignKey:"dates"
        })
    }
    return Date
}