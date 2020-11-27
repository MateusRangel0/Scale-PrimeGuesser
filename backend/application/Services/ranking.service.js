const { Ranking } = require("../Models");

const getAll = async () => {
  try {
    const ranking = await Ranking.findAll({
      order: [
        ["time", "ASC"],
        ["attempts", "ASC"],
      ],
    });

    return ranking;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const getById = async () => {};

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
