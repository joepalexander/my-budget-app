'use strict';
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    name: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    updatedAt: DataTypes.INTEGER,
    createdAt: DataTypes.INTEGER,
  }, {});
  Users.associate = function(models) {
    // associations can be defined here
  };
  return Users;
};