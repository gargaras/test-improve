'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class TVShow extends Model {  
    static associate(models) {
      TVShow.belongsToMany(models.Actor, { as: "actors", through: "actor_tvshow", foreignKey: "tvshow_id" });
      TVShow.hasMany(models.Season, { as: "seasons", foreignKey: "tvshowId" });
    }
  };
  
  TVShow.init({
    name: { type: DataTypes.STRING, allowNull: false },
    rate: DataTypes.INTEGER,
    year: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TVShow',
  });
  
  return TVShow;
};