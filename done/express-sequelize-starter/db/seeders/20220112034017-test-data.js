'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Tasks',[
  {
    name: "Clean car",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Study data structures",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    name: "Buy groceries",
    createdAt: new Date(),
    updatedAt: new Date(),
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Tasks', null, {});
  }
};
