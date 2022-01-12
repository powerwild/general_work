'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Person.associate = function(models) {
    Person.hasMany(models.Enrollment, {foreignKey: 'personId'});
    Person.belongsToMany(models.Course, {
      through: 'Enrollment',
      foreignKey: 'personId',
      otherKey: 'courseId'
    })
  };
  return Person;
};
