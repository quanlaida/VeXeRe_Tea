'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('trips', [
      {
        fromStation: 10,
        toStation: 11,
        startTime: "2023-07-24 06:00:00",
        price: 100000,
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
