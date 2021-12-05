"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_detail extends Model {
        static associate(models) {
            // define association here
        }
    }
    Order_detail.init({
        total: DataTypes.DECIMAL,
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: "User",
                key: "id",
            },
        },
        paymentId: DataTypes.INTEGER,
    }, {
        sequelize,
        tableName: "order_details",
        modelName: "Order_detail",
    });
    return Order_detail;
};
