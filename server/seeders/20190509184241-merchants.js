'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Merchants', [
      {
        name: 'Starbucks',
      },
      {
        name: 'Loblaws'
      },
      {
        name: '401 Games'
      },
      {
        name: 'TTC'
      },
      {
        name: 'Uber'
      },
      {
        name: 'Indigo Books'
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Merchants', null, {});
  }
};
