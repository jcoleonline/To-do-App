'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class completed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  completed.init({
    Title: DataTypes.STRING,
    Details: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'completed',
  });
  return completed;
};