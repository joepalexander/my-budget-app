'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Max',
        lastName: 'Graham',
        hashedPass: 'test1',
        salt: 'test1',
        email: 'test1@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tom',
        lastName: 'Goats',
        hashedPass: 'test2',
        salt: 'test',
        email: 'test2@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
