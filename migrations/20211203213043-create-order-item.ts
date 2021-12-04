"use strict";
module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.createTable("order_items", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      orderDetailId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.dropTable("order_items");
  },
};
