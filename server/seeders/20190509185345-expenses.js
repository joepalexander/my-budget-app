'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('expenses', [
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 1,
        category_id: 1,
        amount: 250,
        description: 'Earl grey tea, hot.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 2,
        category_id: 1,
        amount: 3249,
        description: 'Groceries'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 1,
        category_id: 1,
        amount: 465,
        description: 'Grande american to go.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 5,
        category_id: 2,
        amount: 1150,
        description: 'Uber to movie theater.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        amount: 2000,
        description: 'New Avengers movie with friend.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
        amount: 100000,
        description: 'May rent.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 6,
        category_id: 3,
        amount: 3000,
        description: 'New Adam Savage book.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 1,
        category_id: 1,
        amount: 1500,
        description: 'Bag of coffee beans.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
        amount: 2860,
        description: 'Beers with the boys.'
      },
      {
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 4,
        category_id: 2,
        amount: 3200,
        description: 'Recharge of TTC card.'
      },{
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 1,
        category_id: 1,
        amount: 650,
        description: 'French Late.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 3,
        category_id: 3,
        amount: 6000,
        description: 'New boardgame.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 2,
        category_id: 1,
        amount: 2435,
        description: 'Groceries for dinner.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 4,
        category_id: 2,
        amount: 350,
        description: 'TTC ticket.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        amount: 1500,
        description: 'Ticket for the ROM'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
        amount: 130000,
        description: 'Rent.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        amount: 1500,
        description: 'Patio drink with Jenn.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 1,
        category_id: 1,
        amount: 1500,
        description: 'Capuchino'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        merchant_id: 4,
        category_id: 2,
        amount: 2860,
        description: 'TTC fare.'
      },
      {
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
        amount: 499,
        description: 'Movie on Google Play.'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('expenses', null, {});
  }
};
