'use strict';

const { query } = require("express");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert("Users", [
    {
        username: "irfandelix",
        email: "ivan@gmail.com",
        password: "asdasd123",
        role: "SUPERADMIN",
      createdAt: new Date(),
      updatedAt: new Date ()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users", null,{})
  }
};