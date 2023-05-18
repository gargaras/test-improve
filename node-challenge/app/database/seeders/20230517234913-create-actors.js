'use strict';
const { Actor } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      Actor.create({
        name: "benja",
        age: 37
      }),
      Actor.create({
        name: "juan",
        age: 27
      }),
      Actor.create({
        name: "pedro",
        age: 23
      }),
      Actor.create({
        name: "maria",
        age: 87
      }),
      Actor.create({
        name: "juana",
        age: 12
      }),
      Actor.create({
        name: "tomas",
        age: 22
      }),
      Actor.create({
        name: "miguel",
        age: 45
      }),
      Actor.create({
        name: "soledad",
        age: 76
      }),
      Actor.create({
        name: "antonio",
        age: 14
      }),
      Actor.create({
        name: "micaela",
        age: 28
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise(queryInterface.bulkDelete('actors', null, {}));
  }
};
