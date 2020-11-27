const { Ranking } = require("../Models");

const create = async (data) => {
  try {
    const newRanking = await Ranking.create(data);

    return newRanking;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const getAll = async () => {
  try {
    const rankings = await Ranking.findAll({
      order: [
        ["time", "ASC"],
        ["attempts", "ASC"],
      ],
    });

    return rankings;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const getById = async (id) => {
  try {
    const ranking = await Ranking.findByPk(id);

    return ranking;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const edit = async () => {};

const remove = async () => {};

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
};
