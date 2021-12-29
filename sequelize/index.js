const { sequelize } = require('./models');


async function main() {
    try {
      await sequelize.authenticate();
    } catch (e) {
      console.log("Database connection failure.");
      console.log(e);
      return;
    }

    console.log("Database connection success!");
    console.log("Sequelize is ready to use!");

    // Close database connection when done with it.
    await sequelize.close();
  }

  main();

//   npx sequelize model:generate --name Cat --attributes "firstName:string,specialSkill:string"   //creaes new Cat Model
//   npx sequelize db:migrate   // 


  'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      specialSkill: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Cats');
  }
};
