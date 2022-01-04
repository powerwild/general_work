'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Users', [
        {username: 'aleclikesbreadbuns', email: 'alec@alec.alec', password: 'bunlover', faveBread: 'pumperknickel', createdAt: new Date(), updatedAt: new Date()},
        {username: 'danlikesrolls', email: 'dan@dan.dan', password: 'rolllover', faveBread: 'italian', createdAt: new Date(), updatedAt: new Date()}
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkDelete('Users', null, {});

  }
};
