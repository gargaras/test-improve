'use strict';

const { TVShow } = require('../../models/index');
const { Season } = require('../../models/index');
const { Episode } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      TVShow.create({
        name: "the big bang theory",
        rate: 8,
        year: 2010,
        active: false,
        seasons: [
          { number: 1 },
          { number: 2 },
          { number: 3 }
        ]}, 
       { include: "seasons" }),
      TVShow.create({
        name: "friends",
        rate: 9,
        year: 2000,
        active: false,
        seasons: [
          { number: 1 },
          { number: 2 }
        ]}, 
       { include: "seasons" }),
      TVShow.create({
        name: "arrow",
        rate: 6,
        year: 2020,
        active: true,
        seasons: [
          { number: 1 }
        ]}, 
       { include: "seasons" }),
      TVShow.create({
        name: "the mentalist",
        rate: 4,
        year: 2011,
        active: false,
        seasons: [
          { number: 1 },
          { number: 2 },
          { number: 3 }
        ]}, 
       { include: "seasons" }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('tvshows', null, {}),
      queryInterface.bulkDelete('seasons', null, {})
    ])
  }
};
