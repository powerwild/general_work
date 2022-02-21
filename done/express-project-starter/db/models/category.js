'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Question, {foreignKey: 'categoryId'})
  };
  return Category;
};