'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Actor extends Model {
    static associate(models) {
      Actor.belongsToMany(models.Movie, { as: "movies", through: "actor_movie", foreignKey: "actor_id" });
      Actor.belongsToMany(models.TVShow, { as: "tvshows", through: "actor_tvshow", foreignKey: "actor_id" });
    }
  };
  
  Actor.init({
    name: { type: DataTypes.STRING, allowNull: false },
    age: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Actor',
  });

  return Actor;
};