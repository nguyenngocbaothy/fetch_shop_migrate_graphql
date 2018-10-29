'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    cat_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: {
      type: DataTypes.DOUBLE,
      defaultValue: 0.0
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Category, {
      foreignKey: 'cat_id',
      targetKey: 'id'
    });
  };
  return Product;
};