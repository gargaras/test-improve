'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return await queryInterface.createTable('actor_movie', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      actor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "actors",
          key: "id"
        }
      },
      movie_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "movies",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('actor_movie');
  }
};
