'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Product, { foreignKey: 'cat_id' });
  };
  return Category;
};