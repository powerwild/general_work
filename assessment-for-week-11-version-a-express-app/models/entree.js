'use strict';
module.exports = (sequelize, DataTypes) => {
  const Entree = sequelize.define('Entree', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.NUMERIC,
    entreeTypeId: DataTypes.INTEGER
  }, {});
  Entree.associate = function(models) {
    Entree.belongsTo(models.EntreeType, {foreignKey: 'entreeTypeId'});
  };
  return Entree;
};
