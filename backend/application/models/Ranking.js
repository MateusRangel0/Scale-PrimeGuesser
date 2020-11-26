const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Ranking = sequelize.define("Ranking", {
    playerName: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    attempts: {
      type: DataTypes.INTEGER,
    },
    primeNumber: {
      type: DataTypes.INTEGER,
    },
  });

  return Ranking;
};
