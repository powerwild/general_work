'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Sauces', [
     {name: 'Alfredo', color: 'white', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Bolognese', color: 'red', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Cheesy Bechamel', color: 'white', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Garlic Soy', color: 'brown', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Brown Butter Sage', color: 'brown', createdAt: new Date(), updatedAt: new Date()},
     {name: 'Red Chili Broth', color: 'red', createdAt: new Date(), updatedAt: new Date()}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Sauces', null, {});
  }
};
