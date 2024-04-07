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
    await queryInterface.bulkInsert('tickets', [
      {
        trip_id: 1, // 1-17
        user_id: 1, //1-6
        seatNumber: 1,
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        trip_id: 10,
        user_id: 5,
        seatNumber: 15,
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        trip_id: 5,
        user_id: 4,
        seatNumber: 10,
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        trip_id: 10,
        user_id: 5,
        seatNumber: 15,
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        trip_id: 2,
        user_id: 3,
        seatNumber: 15,
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tickets', null, {});
  }
};
