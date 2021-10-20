module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        category_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        brand_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        smart: {
            type: dataTypes.BOOLEAN
        },
        description: {
            type: dataTypes.STRING(800)
        }
    }
    let config = {
        tablename: "products", //No hace falta
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config)

    Product.associate = modelos => {
        Product.belongsToMany(modelos.Color, {
            as:"colores",
            through:"color_products",
            foreignKey:"product_id",
            otherKey:"color_id",
            timestamps: false
        })

        Product.belongsToMany(modelos.Capacity, {
            as: "capacities",
            through: "capacity_products",
            foreignKey: "product_id",
            otherKey: "capacity_id",
            timestamps: false
        })
        Product.belongsToMany(modelos.Ram, {
            as: "rams",
            through: "ram_products",
            foreignKey: "product_id",
            otherKey: "ram_id",
            timestamps: false
        })
        Product.belongsToMany(modelos.Size, {
            as: "sizes",
            through: "size_products",
            foreignKey: "product_id",
            otherKey: "size_id",
            timestamps: false
        })

        Product.hasMany(modelos.Color_Product, {
            as: "product",
            foreignKey: "product_id",
            timestamps: false
        })

        Product.belongsTo(modelos.Category, {
            as: "category",
            foreignKey: "category_id",
        })

        Product.belongsTo(modelos.Brand, {
            as: "brand",
            foreignKey: "brand_id",
        })

        Product.hasMany(modelos.Capacity_Product, {
            as: "capacity",
            foreignKey: "capacity_id"
        })

        Product.hasMany(modelos.Product_Image, {
            as: "images",
            foreignKey: "product_id"
        })
        
        Product.hasMany(modelos.Ram_Product, {
            as: "ram",
            foreignKey: "ram_id"
        })
        Product.hasMany(modelos.Size_Product, {
            as: "size",
            foreignKey: "size_id"
        })
      
      

    }

    return Product
}