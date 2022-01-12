'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
    {userId: 2, subId: 1, title: 'What is bread?', content: 'The best bread ever!', createdAt: new Date(), updatedAt: new Date()},
    {userId: 2, subId: 1, title: 'What bread is...', content: 'Bounty of Nature', createdAt: new Date(), updatedAt: new Date()},
    {userId: 2, subId: 1, title: 'What bread should be', content: 'Made with flour', createdAt: new Date(), updatedAt: new Date()}
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
