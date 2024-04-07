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
    await queryInterface.bulkInsert('Users', [
      {
        firtsName: "Quách",
        lastName: "Ngọc Hưng",
        email: "quachhung389@gmail.com",
        password: "$2a$10$k8wBJFtFBOtytuXRkXj38eADyIgU1tkSz3rH0l/nJgDMWd7MdKA/6",
        numberPhone: "0776322272",
        type: "admin",
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        firtsName: "Phạm",
        lastName: "Thảo Linh",
        email: "phamthaolinh123@gmail.com",
        password: "$2a$10$36Yed/7NCVQpHsvDkFZAUuIhHXvvTHUmOMzH7QbQU.8.Zr3wZNE0a",
        numberPhone: "0334196187",
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        firtsName: "Nguyễn",
        lastName: "Văn A",
        email: "vanA1234@gmail.com",
        password: "$2a$10$6KMZbZtdlZeJt/qPQEuMluLHND064zOqPzoY2eOFjBUjVRcWBfSnm",
        numberPhone: "0152489652",
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        firtsName: "Trần",
        lastName: "Trung Quân",
        email: "trungquanidol@gmail.com",
        password: "$2a$10$Sa4FEb6ENnZGoLx4Ia5HUe15f6ZOo7gOcMdVEAZm2w2c29PPEZXji",
        numberPhone: "0339875625",
        createdAt: "2023-07-24 09:48:10.000",
        updatedAt: "2023-07-24 09:48:10.000"
      },
      {
        firtsName: "Vũ",
        lastName: "Hoàng",
        email: "vuhoang1990@gmail.com",
        password: "$2a$10$UrOoMNCBYXPKlsOuURXcNeezN/Ir1MbiiAiJMNJpm5eTWjXMwtROy",
        numberPhone: "0903292273",
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
     * await queryInterface.bulkDelete('User', null, {});
     */
    await queryInterface.bulkDelete('User', null, {});
  }
};
