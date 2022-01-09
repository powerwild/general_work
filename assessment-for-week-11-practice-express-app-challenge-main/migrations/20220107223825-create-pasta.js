'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pastas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      label: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      description: {
        type: Sequelize.STRING
      },
      taste: {
        type: Sequelize.NUMERIC(2),
        validate: {
          min: 0,
          max: 10
        }
      },
      sauceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Sauces'}
      },
      noodleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Noodles'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pastas');
  }
};
