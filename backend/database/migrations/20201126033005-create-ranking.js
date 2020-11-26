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
      },
      time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      attempts: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      primeNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    }),

  down: (queryInterface) => queryInterface.dropTable("Rankings"),
};
