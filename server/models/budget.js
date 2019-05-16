'use strict';
module.exports = (sequelize, DataTypes) => {
  const Budget = sequelize.define('Budget', {
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
        model: 'User',
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
    durationInMonths: {
      allowNull: false, 
      type: DataTypes.INTEGER,
    },
    startDate: {
      allowNull: false, 
      type: DataTypes.DATE,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {});

  Budget.associate = function(models) {
    // Budget.belongsTo(models.User, {as: 'user'})
    Budget.belongsTo(models.Category, {as: 'category', foreignKey: 'categoryId'})
  };
  return Budget;
};



