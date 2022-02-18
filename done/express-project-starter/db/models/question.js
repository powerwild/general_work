'use strict';
module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    description: {
      allowNull: false,
      type: DataTypes.STRING(50)
    },
    questionData: {
      allowNull: false,
      type: DataTypes.STRING(200)
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Question.associate = function(models) {
    Question.belongsTo(models.User, {foreignKey: 'userId'})
    Question.belongsTo(models.Category, {foreignKey: 'categoryId'})
    Question.hasMany(models.Answer, {foreignKey: 'questionId'})
  };
  return Question;
};
