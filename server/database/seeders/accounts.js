'use strict';

const hashSync = require("bcryptjs").hashSync

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('accounts', [{
            name: 'Kshitij Bajracharya',
            email: 'kshitij@tomei.com',
            password: hashSync("kshitij", 10),
            created_at: new Date()
        }], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('accounts', null, {});
    }
};
