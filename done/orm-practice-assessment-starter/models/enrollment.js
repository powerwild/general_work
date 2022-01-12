'use strict';
module.exports = (sequelize, DataTypes) => {
  const Enrollment = sequelize.define('Enrollment', {
    personId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER
  }, {});
  Enrollment.associate = function(models) {
    Enrollment.belongsTo(models.Person, {foreignKey: 'personId'});
    Enrollment.belongsTo(models.Course, {foreignKey: 'courseId'});
  };
  return Enrollment;
};
