"use strict";
const { Model } = require("sequelize");

interface Order_detailAttributes {
  id: number;
  total: number;
  userid: number;
  paymentid: number;
}


module.exports = (sequelize: any, DataTypes: { DECIMAL: any; INTEGER: any; }) => {
  class Order_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     id!: number;
     total!: number;
     userId!: number;
     paymentId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  Order_detail.init(
    {
      total: DataTypes.DECIMAL,
      userId: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
      paymentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      tableName: "order_details",
      modelName: "Order_detail",
    }
  );
  return Order_detail;
};
