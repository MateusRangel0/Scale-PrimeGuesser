const RankingService = require("../Services/ranking.service");

const create = async (req, res) => {
  try {
    if (!req.body.playerName)
      res.status(400).json({ error: "O nome do jogador deve ser fornecido" });
    if (!req.body.time)
      res.status(400).json({ error: "O tempo deve ser fornecido" });
    if (!req.body.attempts)
      res
        .status(400)
        .json({ error: "O número de tentativas deve ser fornecido" });
    if (!req.body.primeNumber)
      res.status(400).json({ error: "O número primo deve ser fornecido" });

    const newRanking = await RankingService.create(req.body);

    return res.status(201).json(newRanking);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const rankings = await RankingService.getAll();

    return res.json(rankings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const ranking = await RankingService.getById(id);

    return res.json(ranking);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRanking = await RankingService.edit(id, {
      ...req.body,
      updateAt: new Date(),
    });

    return res.json(updatedRanking);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    return await RankingService.remove(id);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
};
