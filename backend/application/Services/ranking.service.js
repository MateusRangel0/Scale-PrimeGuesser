const { Ranking } = require("../Models");

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

const create = async () => {
  try {
  } catch (error) {}
};

const edit = async () => {};

const remove = async () => {};

module.exports = {
  getAll,
  getById,
  create,
  edit,
  remove,
};
