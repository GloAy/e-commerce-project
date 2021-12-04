"use strict";
module.exports = {
  up: async (queryInterface: any, Sequelize: any) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      size: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
        validate: {
          min: 0,
          max: 10000000000,
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
      },
      imageurl: {
        type: Sequelize.STRING,
        defaultValue:
          "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202146/0017/unscented-wax-pillar-candles-z.jpg",
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
    await queryInterface.dropTable("products");
  },
};
