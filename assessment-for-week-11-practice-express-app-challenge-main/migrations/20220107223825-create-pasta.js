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
        allowNull: false,
        type: Sequelize.STRING
      },
      taste: {
        allowNull: false,
        type: Sequelize.NUMERIC(3,1),
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
    return queryInterface.dropTable('Pasta');
  }
};
