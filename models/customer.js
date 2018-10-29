'use strict';
module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    forename: DataTypes.STRING,
    surname: DataTypes.STRING,
    add1: DataTypes.STRING,
    postcode: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    registered: DataTypes.BOOLEAN
  }, {});
  Customer.associate = function(models) {
    // associations can be defined here
  };
  return Customer;
};