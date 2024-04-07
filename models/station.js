'use strict';
const provinces = [
  "Thành phố Hà Nội",
  "Thành phố Hồ Chí Minh (TP.HCM)",
  "Thành phố Hải Phòng",
  "Thành phố Cần Thơ",
  "Thành phố Đà Nẵng",
  "Tỉnh Hà Giang",
  "Tỉnh Cao Bằng",
  "Tỉnh Lai Châu",
  "Tỉnh Lào Cai",
  "Tỉnh Tuyên Quang",
  "Tỉnh Lạng Sơn",
  "Tỉnh Bắc Kạn",
  "Tỉnh Thái Nguyên",
  "Tỉnh Yên Bái",
  "Tỉnh Sơn La",
  "Tỉnh Phú Thọ",
  "Tỉnh Vĩnh Phúc",
  "Tỉnh Bắc Giang",
  "Tỉnh Bắc Ninh",
  "Tỉnh Hải Dương",
  "Tỉnh Hưng Yên",
  "Tỉnh Hòa Bình",
  "Tỉnh Hà Nam",
  "Tỉnh Nam Định",
  "Tỉnh Ninh Bình",
  "Tỉnh Thanh Hóa",
  "Tỉnh Nghệ An",
  "Tỉnh Hà Tĩnh",
  "Tỉnh Quảng Bình",
  "Tỉnh Quảng Trị",
  "Tỉnh Thừa Thiên-Huế",
  "Tỉnh Quảng Nam",
  "Tỉnh Quảng Ngãi",
  "Tỉnh Bình Định",
  "Tỉnh Phú Yên",
  "Tỉnh Khánh Hòa",
  "Tỉnh Ninh Thuận",
  "Tỉnh Bình Thuận",
  "Tỉnh Kon Tum",
  "Tỉnh Gia Lai",
  "Tỉnh Đắk Lắk",
  "Tỉnh Đắk Nông",
  "Tỉnh Lâm Đồng",
  "Tỉnh Bình Phước",
  "Tỉnh Tây Ninh",
  "Tỉnh Bình Dương",
  "Tỉnh Đồng Nai",
  "Tỉnh Bà Rịa-Vũng Tàu",
  "Tỉnh Long An",
  "Tỉnh Tiền Giang",
  "Tỉnh Bến Tre",
  "Tỉnh Trà Vinh",
  "Tỉnh Vĩnh Long",
  "Tỉnh Đồng Tháp",
  "Tỉnh An Giang",
  "Tỉnh Kiên Giang",
  "Tỉnh Cần Thơ",
  "Tỉnh Hậu Giang",
  "Tỉnh Sóc Trăng",
  "Tỉnh Bạc Liêu",
  "Tỉnh Cà Mau"
];
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip }) {
      // define association here
      this.hasMany(Trip, { foreignKey: `fromStation`, as: `from` });
      this.hasMany(Trip, { foreignKey: `toStation`, as: `to` });
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [5, 100],
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 100],
        // checkLen(value) {
        //   if (value.length >= 5 && value.length <= 100) {
        //     return true;
        //   } else {
        //     throw new Error(`Độ dài không hợp lệ`); // Đẩy lỗi về.
        //   }
        // }
      }
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isIn: [provinces],
        // Kiểm tra các giá trị phải là một trong provinces
      }
    },
    image: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};