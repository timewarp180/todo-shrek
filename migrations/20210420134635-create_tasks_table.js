'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks',{
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
      },
      account_uuid:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      task_name:{
        type: Sequelize.STRING,   
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('pending', 'completed')
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull:false
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tasks');
  }
};
