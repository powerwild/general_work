'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    level: DataTypes.INTEGER,
    campusId: DataTypes.INTEGER,
    departmentId: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    Course.hasMany(models.Enrollment, {foreignKey: 'courseId'});
    Course.belongsTo(models.Campus, {foreignKey: 'campusId'});
    Course.belongsTo(models.Department, {foreignKey: 'departmentId'});
    Course.belongsToMany(models.Person, {
      through: 'Enrollment',
      foreignKey: 'courseId',
      otherKey: 'personId'
    });
  };
  return Course;
};
