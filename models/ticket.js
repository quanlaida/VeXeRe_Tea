'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Trip, User }) {
      this.belongsTo(Trip, { foreignKey: `trip_id` });
      this.belongsTo(User, { foreignKey: `user_id` });
      // define association here
    }
  }
  Ticket.init({
    seatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};