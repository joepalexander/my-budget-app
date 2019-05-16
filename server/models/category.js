'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
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
  Category.associate = function(models) {
    Category.hasMany(models.Budget, {foreignKey: 'categoryId'})
  };

  return Category;
};