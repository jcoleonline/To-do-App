'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize){
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Ramon',
      lastName: 'Santana',
      email: 'rjscccolor@nasa.gov',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
