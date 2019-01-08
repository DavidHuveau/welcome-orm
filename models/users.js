"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      age: DataTypes.INTEGER
    },
    {}
  );
  users.associate = function(models) {
    // associations can be defined here
    users.hasMany(models.orders);
  };
  return users;
};
