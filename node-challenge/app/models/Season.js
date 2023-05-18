'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Season extends Model {
    static associate(models) {
      Season.belongsTo(models.TVShow, { as: "tvshows", foreignKey: "tvshowId" });
      Season.hasMany(models.Episode, { as: "episodes", foreignKey: "seasonId" });    
    }
  };

  Season.init({
    number: { type: DataTypes.INTEGER, allowNull: false }
  }, {
    sequelize,
    modelName: 'Season',
  });

  return Season;
};