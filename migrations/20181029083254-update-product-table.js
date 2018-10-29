'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.changeColumn('Products', 'cat_id', {
            type: 'INTEGER USING CAST("cat_id" as INTEGER)'
    });

        down: (queryInterface, Sequelize) => {
                return queryInterface.dropTable('Products');
        }
    }
}