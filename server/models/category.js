'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  category.associate = function(models) {
    category.hasMany(models.budget, {as: 'category'})
  };
  return category;
};