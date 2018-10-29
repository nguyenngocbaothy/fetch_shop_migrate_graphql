'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Customers','registered', {
    type: Sequelize.BOOLEAN,  
    defaultValue: false
  });
  
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Customers');
  }
}
}