'use strict';
module.exports = (sequelize, DataTypes) => {
  const merchant = sequelize.define('merchant', {
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
  merchant.associate = function(models) {
    // associations can be defined here
  };
  return merchant;
};