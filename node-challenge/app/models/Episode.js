'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Episode extends Model {
    static associate(models) {
      Episode.belongsTo(models.Season, { as: "seasons", foreignKey: "seasonId" });
      Episode.belongsTo(models.Director, { as: "directors", foreignKey: "directorId" });
    }
  };

  Episode.init({
    name: { type: DataTypes.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'Episode',
  });
  
  return Episode;
};