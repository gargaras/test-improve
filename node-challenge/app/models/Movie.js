'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Movie extends Model {
    static associate(models) {
      Movie.belongsToMany(models.Actor, { as: "actors", through: "actor_movie", foreignKey: "movie_id" });
      Movie.belongsTo(models.Director, { as: "director", foreignKey: "directorId" });
    }
  };

  Movie.init({
    name: { type: DataTypes.STRING, allowNull: false },
    year: DataTypes.INTEGER,
    rate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  
  return Movie;
};