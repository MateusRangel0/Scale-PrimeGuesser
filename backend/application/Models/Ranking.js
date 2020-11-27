module.exports = (sequelize, DataTypes) => {
  const Ranking = sequelize.define("Ranking", {
    playerName: {
      type: DataTypes.STRING,
      required: true,
    },
    time: {
      type: DataTypes.STRING,
      required: true,
    },
    attempts: {
      type: DataTypes.INTEGER,
      required: true,
    },
    primeNumber: {
      type: DataTypes.INTEGER,
      required: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      required: true,
      defaultValue: new Date(),
    },
    updatedAt: {
      type: DataTypes.DATE,
      required: true,
      defaultValue: new Date(),
    },
  });

  return Ranking;
};
