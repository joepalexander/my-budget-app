'use strict';
module.exports = (sequelize, DataTypes) => {
  const expense = sequelize.define('expense', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE
    },
    transation_date: {
      type: DataTypes.DATE
    },
    merchant_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'merchant',
        key: 'id'
      }
    },
    category_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
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
  expense.associate = function(models) {
    expense.belongsTo(models.user)
  };
  return expense;
};