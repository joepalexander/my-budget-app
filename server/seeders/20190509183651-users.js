'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        first_name: 'Max',
        last_name: 'Graham',
        password: 'test1',
        email: 'test1@example.com',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        first_name: 'Tom',
        last_name: 'Goats',
        password: 'test2',
        email: 'test2@example.com',
        created_at: new Date(),
        updated_at: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
