'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Director extends Model {
    static associate(models) {
      Director.hasMany(models.Movie, { as: "movies", foreignKey: "directorId" });
      Director.hasMany(models.Episode, { as: "episodes", foreignKey: "directorId" });
    }
  };

  Director.init({
    name: { type: DataTypes.STRING, allowNull: false },
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Director',
  });
  
  return Director;
};