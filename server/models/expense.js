'use strict';
module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define('Expense', {
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
    Expense.belongsTo(models.Category, {as: 'category', foreignKey: 'categoryId'}),
    Expense.belongsTo(models.Merchant, {as: 'merchant', foreignKey: 'merchantId'})
    Expense.belongsTo(models.User, {as: 'user', foreignKey: 'userId'})

  };
  return Expense;
};