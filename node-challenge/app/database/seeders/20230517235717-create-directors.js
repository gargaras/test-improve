'use strict';
const { Director } = require('../../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      Director.create({
        name: "jose",
        age: 37
      }),
      Director.create({
        name: "abel",
        age: 27
      }),
      Director.create({
        name: "monica",
        age: 23
      }),
      Director.create({
        name: "jesica",
        age: 87
      }),
      Director.create({
        name: "morena",
        age: 12
      }),
      Director.create({
        name: "indiana",
        age: 22
      }),
      Director.create({
        name: "carlos",
        age: 45
      }),
      Director.create({
        name: "manuel",
        age: 76
      }),
      Director.create({
        name: "jorge",
        age: 14
      }),
      Director.create({
        name: "mariana",
        age: 28
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise(queryInterface.bulkDelete('directors', null, {}));
  }
};
