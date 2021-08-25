'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'products',
      {
        id: {
          type: Sequelize.UUID,
          default: Sequelize.UUIDV4,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        image: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        stock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        real_stock: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        price: {
          type: Sequelize.BIGINT,
          allowNull: false
        },
        description: {
          type: Sequelize.STRING
        }
      }
    )
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products')
  }
};
