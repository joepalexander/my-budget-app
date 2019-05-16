'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Food and Drink',
        description: 'Should include expenses like groceries, coffee, meals-outs'
      },
      {
        name: 'Transporation',
        description: 'Public transport, taxis, gas for your car.'
      },
      {
        name: 'Entertainment',
        description: 'Going out to the movies, buying games.'
      },
      {
        name: 'Rent & Mortgage',
        description: 'The amount you pay to your landlord or bank.'
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
