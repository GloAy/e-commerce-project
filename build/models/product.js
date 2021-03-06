"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
exports.Model = require("sequelize").Model;
module.exports = (sequelize, DataTypes) => {
    class Product extends exports.Model {
        static associate(models) {
            // define association here
            this.hasMany(models.Order_item, { foreignKey: "productId" });
        }
    }
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        size: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        quantity: DataTypes.INTEGER,
        imageurl: DataTypes.TEXT,
    }, {
        sequelize,
        tableName: "products",
        modelName: "Product",
    });
    return Product;
};
