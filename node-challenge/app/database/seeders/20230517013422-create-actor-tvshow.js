'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('actor_tvshow', [
        { actor_id: 1, tvshow_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 2, tvshow_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 2, tvshow_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 3, tvshow_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 4, tvshow_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 5, tvshow_id: 6, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 6, tvshow_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 7, tvshow_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 8, tvshow_id: 5, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 9, tvshow_id: 4, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 10, tvshow_id: 3, createdAt: new Date(), updatedAt: new Date() },
        { actor_id: 7, tvshow_id: 4, createdAt: new Date(), updatedAt: new Date() },
      ], {})
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise(queryInterface.bulkDelete('actor_tvshow', null, {}));
  }
};
