'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('actor_movie', [
        { actor_id: 1, movie_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 2, movie_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 2, movie_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 3, movie_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 4, movie_id: 2, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 5, movie_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 6, movie_id: 7, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 7, movie_id: 10, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 8, movie_id: 9, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 9, movie_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 10, movie_id: 1, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 7, movie_id: 8, createdAt: new Date(), updatedAt: new Date() },
      ], {})
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise(queryInterface.bulkDelete('actor_movie', null, {}));
  }
};
