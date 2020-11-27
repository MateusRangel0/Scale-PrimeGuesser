const RankingService = require("../Services/ranking.service");

const getAll = async (req, res) => {
  try {
    const rankings = await RankingService.getAll();

    return res.json(rankings);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { getAll };
