'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('expenses', [
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 1,
        categoryId: 1,
        amount: 250,
        description: 'Earl grey tea, hot.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 2,
        categoryId: 1,
        amount: 3249,
        description: 'Groceries'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 1,
        categoryId: 1,
        amount: 465,
        description: 'Grande american to go.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 5,
        categoryId: 2,
        amount: 1150,
        description: 'Uber to movie theater.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 3,
        amount: 2000,
        description: 'New Avengers movie with friend.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 4,
        amount: 100000,
        description: 'May rent.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 6,
        categoryId: 3,
        amount: 3000,
        description: 'New Adam Savage book.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 1,
        categoryId: 1,
        amount: 1500,
        description: 'Bag of coffee beans.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 1,
        amount: 2860,
        description: 'Beers with the boys.'
      },
      {
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 4,
        categoryId: 2,
        amount: 3200,
        description: 'Recharge of TTC card.'
      },{
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 1,
        categoryId: 1,
        amount: 650,
        description: 'French Late.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 3,
        categoryId: 3,
        amount: 6000,
        description: 'New boardgame.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 2,
        categoryId: 1,
        amount: 2435,
        description: 'Groceries for dinner.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 4,
        categoryId: 2,
        amount: 350,
        description: 'TTC ticket.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 3,
        amount: 1500,
        description: 'Ticket for the ROM'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 4,
        amount: 130000,
        description: 'Rent.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 3,
        amount: 1500,
        description: 'Patio drink with Jenn.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 1,
        categoryId: 1,
        amount: 1500,
        description: 'Capuchino'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        merchantId: 4,
        categoryId: 2,
        amount: 2860,
        description: 'TTC fare.'
      },
      {
        userId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        categoryId: 3,
        amount: 499,
        description: 'Movie on Google Play.'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('expenses', null, {});
  }
};
