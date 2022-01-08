'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pasta = sequelize.define('Pasta', {
    label: DataTypes.STRING,
    description: DataTypes.STRING,
    taste: DataTypes.NUMERIC
  }, {});
  Pasta.associate = function(models) {
    Pasta.belongsTo(models.Noodle, {foreignKey: 'noodleId'});
    Pasta.belongsTo(models.Sauce, {foreignKey: 'sauceId'})
  };
  return Pasta;
};
