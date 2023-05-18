'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkInsert('episodes', [
        { name: 'first1', seasonId: 4, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second1', seasonId: 4, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third1', seasonId: 4, directorId: 3, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth1', seasonId: 4, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fifth1', seasonId: 4, directorId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'first2', seasonId: 5, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second2', seasonId: 5, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third2', seasonId: 5, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth2', seasonId: 5, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fifth2', seasonId: 5, directorId: 2, createdAt: new Date(), updatedAt: new Date() },
        { name: 'first3', seasonId: 6, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second3', seasonId: 6, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third3', seasonId: 6, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth3', seasonId: 6, directorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fifth3', seasonId: 6, directorId: 2, createdAt: new Date(), updatedAt: new Date() },

        { name: 'first1', seasonId: 7, directorId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second1', seasonId: 7, directorId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third1', seasonId: 7, directorId: 5, createdAt: new Date(), updatedAt: new Date() },
        { name: 'first2', seasonId: 8, directorId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second2', seasonId: 8, directorId: 10, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third2', seasonId: 8, directorId: 10, createdAt: new Date(), updatedAt: new Date() },
        
        { name: 'first1', seasonId: 9, directorId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second1', seasonId: 9, directorId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third1', seasonId: 9, directorId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth1', seasonId: 9, directorId: 4, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fifth1', seasonId: 9, directorId: 4, createdAt: new Date(), updatedAt: new Date() },

        { name: 'first1', seasonId: 10, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second1', seasonId: 10, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third1', seasonId: 10, directorId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth1', seasonId: 10, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        
        { name: 'first2', seasonId: 11, directorId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second2', seasonId: 11, directorId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third2', seasonId: 11, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth2', seasonId: 11, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        
        { name: 'first3', seasonId: 12, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'second3', seasonId: 12, directorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { name: 'third3', seasonId: 12, directorId: 9, createdAt: new Date(), updatedAt: new Date() },
        { name: 'fourth3', seasonId: 12, directorId: 9, createdAt: new Date(), updatedAt: new Date() },
        

      ], {})
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise(queryInterface.bulkDelete('episodes', null, {}));
  }
};
          