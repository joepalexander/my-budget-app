'use strict';
module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define('Merchant', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Merchant.associate = function(models) {
    Merchant.hasMany(models.Expense, {foreignKey: 'merchantId'})
  };
  return Merchant;
};