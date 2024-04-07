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
    await queryInterface.bulkInsert('Stations',
      [
        {
          name: "Bến xe Giáp Bát.",
          address: "Giải Phóng, Giáp Bát, Hoàng Mai - Hà Nội.",
          province: "Thành phố Hà Nội.",
          createdAt: "2023-04-29 04:08:10.000",
          updatedAt: "2023-04-29 04:08:10.000"
        },
        {
          name: "Bến xe Mỹ Đình.",
          address: "Số 20 Phạm Hùng, Nam Từ Liêm, Thành phố Hà Nội.",
          province: "Thành phố Hà Nội.",
          createdAt: "2023-04-29 04:09:11.000",
          updatedAt: "2023-06-06 15:42:14.000"
        },
        {
          name: "Bến xe thành phố Thái Bình.",
          address: "ĐT223, P. Bồ Xyên, Tp. Thái Bình, Thái Bình.",
          province: "Tỉnh Thái Bình.",
          createdAt: "2023-05-08 07:45:43.000",
          updatedAt: "2023-06-05 07:48:41.000"
        },
        {
          name: "Bến xe Nước Ngầm.",
          address: "01 Ngọc Hồi, Hoàng Liệt, Hoàng Mai,Hà Nội.",
          province: "Thành phố Hà Nội.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe trung tâm Đà Nẵng.",
          address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng.",
          province: "Thành phố Đà Nẵng.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe Gia Lâm.",
          address: "Số 09 Ngô Gia Khảm, Quận Long Biên, Hà Nội.",
          province: "Thành phố Hà Nội.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe Hà Đông.",
          address: "Nguyễn Trãi, P. Văn Quán, Hà Đông, Hà Nội.",
          province: "Thành phố Hà Nội.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe Yên Nghĩa.",
          address: "QL6, Phú Lâm, Hà Đông, Hà Nội.",
          province: "Thành phố Hà Nội.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe Miền Đông.",
          address: "292 Đinh Bộ Lĩnh, phường 26, quận Bình Thạnh, thành phố Hồ Chí Minh.",
          province: "Thành phố Hồ Chí Minh.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe Miền Đông Mới.",
          address: "501 Hoàng Hữu Nam, phường Long Bình, quận 9, thành phố Hồ Chí Minh.",
          province: "Thành phố Hồ Chí Minh.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
        },
        {
          name: "Bến xe Miền Tây.",
          address: "395 Kinh Dương Vương, phường An Lạc, quận Bình Tân.",
          province: "Thành phố Hồ Chí Minh.",
          createdAt: "2023-06-01 07:32:29.000",
          updatedAt: "2023-06-01 07:32:29.000"
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
    await queryInterface.bulkDelete('Stations', null, {});
  }
};
