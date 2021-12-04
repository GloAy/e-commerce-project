"use strict";
export const { Model } = require("sequelize");

interface Order_item{
  id: number;
  quantity: number;
  productId: number;
  orderDetailId: number;
}


module.exports = (sequelize: any, DataTypes: { INTEGER: any; }) => {
  class Order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    quantity!: number;
    productId!: number;
    orderDetailId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  Order_item.init(
    {
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
    },
    {
      sequelize,
      tableName: "order_items",
      modelName: "Order_item",
    }
  );
  return Order_item;
};
