'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    firstName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    lastName: {
      allowNull: false,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    hashedPass: {
      allowNull: false,
      type: DataTypes.STRING
    },
    salt: {
      allowNull: false,
      type: DataTypes.STRING
    },
    count: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});

  User.associate = function(models) {
    User.hasMany(models.Budget, {as: 'budget'})
  };

  return User;
};
