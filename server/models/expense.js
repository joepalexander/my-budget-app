'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('expense', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    transationDate: {
      type: DataTypes.DATE
    },
    merchantId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Merchant',
        key: 'id'
      }
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Category',
        key: 'id'
      }
    },
    amount: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, {});
  Expense.associate = function(models) {
    // associations can be defined here
  };
  return Expense;
};