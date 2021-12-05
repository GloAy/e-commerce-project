"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Order_detail extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: "userId" });
            this.hasMany(models.Order_item, {
                foreignKey: "orderDetailId"
            });
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
