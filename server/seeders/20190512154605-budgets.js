'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('budgets', [
        {
          userId: 1,
          categoryId: 1,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          categoryId: 2,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          categoryId: 3,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          categoryId: 4,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          categoryId: 1,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          categoryId: 2,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          categoryId: 3,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          categoryId: 4,
          durationInMonths: 1,
          startDate: new Date(),
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('budgets', null, {});
  }
};
