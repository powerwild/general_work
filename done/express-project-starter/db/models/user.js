'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      allowNull: false,
      type: DataTypes.STRING(50),
      unique: true
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING(255),
      unique: true
    },
    hashedPassword: {
      allowNull: false,
      type: DataTypes.STRING.BINARY
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Question, {foreignKey: 'userId'})
    User.hasMany(models.Answer, {foreignKey: 'userId'})
    User.hasMany(models.Vote, {foreignKey: 'userId'})
  };
  return User;
};
