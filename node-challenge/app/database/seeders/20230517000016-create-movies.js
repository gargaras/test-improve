'use strict';
const { Movie } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      Movie.create({
        name: "a clockwork orange",
        year: 2000,
        rate: 3,
        directorId: 1
      }),
      Movie.create({
        name: "titanic",
        year: 1994,
        rate: 7,
        directorId: 8
      }),
      Movie.create({
        name: "rocky 4",
        year: 1985,
        rate: 10,
        directorId: 10
      }),
      Movie.create({
        name: "rambo",
        year: 1981,
        rate: 9,
        directorId: 3
      }),
      Movie.create({
        name: "the godfather",
        year: 1994,
        rate: 9,
        directorId: 2
      }),
      Movie.create({
        name: "the godfather 2",
        year: 1995,
        rate: 8,
        directorId: 2
      }),
      Movie.create({
        name: "the wall",
        year: 2005,
        rate: 6,
        directorId: 3
      }),
      Movie.create({
        name: "moby dick",
        year: 2010,
        rate: 4,
        directorId: 5
      }),
      Movie.create({
        name: "matrix",
        year: 2000,
        rate: 1,
        directorId: 1
      }),
      Movie.create({
        name: "up",
        year: 2020,
        rate: 7,
        directorId: 4
      }),
      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise(queryInterface.bulkDelete('movies', null, {}));
  }
};
