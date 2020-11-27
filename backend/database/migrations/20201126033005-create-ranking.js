module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable("Rankings", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      playerName: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
      },
      time: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
      },
      attempts: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
      },
      primeNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        required: true,
      },
      createdAt: {
        type: Sequelize.DATE,
        required: true,
      },
      updatedAt: {
        type: Sequelize.DATE,
        required: true,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("Rankings"),
};
