"use strict";

module.exports = {
  up: async (queryInterface: { bulkInsert: (arg0: string, arg1: { id: number; firstName: string; lastName: string; email: string; password: string; address: string; createdAt: Date; updatedAt: Date; }[]) => any; }, Sequelize: any) => {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        firstName: "gonca",
        lastName: "ay",
        email: "duygu@me.com",
        password: "du123",
        address: "brooklyn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: "duygu",
        lastName: "ay",
        email: "duygu@me.com",
        password: "du123",
        address: "brooklyn",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface: any, Sequelize: any) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
