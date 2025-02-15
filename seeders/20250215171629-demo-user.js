'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /** sider berguana untuk data bhongan supaya tabel tidak kosong
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Users', [
      {
        name: 'rizal khudori',
        email: 'khudoririzal18@gmail.com',
        password: "kamu",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'farhan',
        email: 'farhan@gmail.com',
        password: "harus",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'mutia',
        email: 'mutia22@gmail.com',
        password: "bisa",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
