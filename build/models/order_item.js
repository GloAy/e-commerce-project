"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
exports.Model = require("sequelize").Model;
module.exports = (sequelize, DataTypes) => {
    class Order_item extends exports.Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.Product, { foreignKey: "productId" });
            this.belongsTo(models.Order_detail, { foreignKey: "orderDetailId" });
        }
    }
    Order_item.init({
        quantity: DataTypes.INTEGER,
        productId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Product",
                key: "id",
            },
        },
        orderDetailId: {
            type: DataTypes.INTEGER,
            references: {
                model: "Order_detail",
                key: "id",
            },
        },
    }, {
        sequelize,
        tableName: "order_items",
        modelName: "Order_item",
    });
    return Order_item;
};
