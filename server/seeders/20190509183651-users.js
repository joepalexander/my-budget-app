'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Max',
        lastName: 'Graham',
        hashedPass: '$2b$10$2LK.aNTyajAXkc/GpaprYuIN0/FiZmn5IXejBANvjaB/3DzKvZ0Sa',
        salt: '$2b$10$2LK.aNTyajAXkc/GpaprYu',
        email: 'test1@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        count: 0
      },
      {
        firstName: 'Tom',
        lastName: 'Goats',
        hashedPass: '$2b$10$1ZWsURqKficnqCknsHaXL.WWnsohZy0PACsUt6d6mZ7Cod.XIvzpK',
        salt: '$2b$10$1ZWsURqKficnqCknsHaXL.',
        email: 'test2@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        count: 0
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
