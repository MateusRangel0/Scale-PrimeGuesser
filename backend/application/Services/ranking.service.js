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

    if (!ranking) throw new Error({ message: "Ranking não encontrado" });

    return ranking;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const edit = async (id, data) => {
  try {
    const editedRanking = await Ranking.update(data, {
      where: {
        id,
      },
    });

    if (!editedRanking) throw new Error({ message: "Ranking não encontrado" });

    return getById(id);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const remove = async (id) => {
  try {
    const ranking = await getById(id);

    if (!ranking) throw new Error({ message: "Ranking não encontrado" });

    await ranking.destroy();
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
};
