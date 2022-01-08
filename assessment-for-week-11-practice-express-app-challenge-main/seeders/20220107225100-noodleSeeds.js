'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Noodles', [
     {name: 'Linguini', isStuffed: false, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Fettucini', isStuffed: false, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Tortellini', isStuffed: true, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Ravioli', isStuffed: true, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Udon', isStuffed: false, createdAt: new Date(), updatedAt: new Date()},
     {name: 'Ramen', isStuffed: false, createdAt: new Date(), updatedAt: new Date()}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Noodles', null, {});
  }
};
