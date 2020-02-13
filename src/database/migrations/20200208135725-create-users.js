'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      usrId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      usrName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      usrEmail: {
        type: Sequelize.STRING,
        allowNull: false
      },
      usrPasswordHash: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  down: queryInterface => {
    return queryInterface.dropTable('users')
  }
}
