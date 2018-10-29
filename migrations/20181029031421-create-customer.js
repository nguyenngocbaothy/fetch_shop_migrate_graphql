'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Customers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      forename: {
        type: Sequelize.STRING
      },
      surname: {
        type: Sequelize.STRING
      },
      add1: {
        type: Sequelize.STRING
      },
      postcode: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      registered: {
        type: Sequelize.BOOLEAN
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
};