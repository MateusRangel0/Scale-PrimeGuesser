const RankingService = require("../Services/ranking.service");
const ResponseService = require("../Services/response.service");

const create = async (req, res) => {
  try {
    const { playerName, time, attempts, primeNumber } = req.body;

    if (!playerName)
      return ResponseService.badRequest(res, "Nome não fornecido");

    if (!time) return ResponseService.badRequest(res, "Tempo não fornecido");

    if (!attempts)
      return ResponseService.badRequest(
        res,
        "Número de tentativas não fornecido"
      );

    if (!primeNumber)
      return ResponseService.badRequest(res, "Número primo não fornecido");

    const rankingFields = { playerName, time, attempts, primeNumber };
    const newRanking = await RankingService.create(rankingFields);

    return ResponseService.ok(res, newRanking);
  } catch (error) {
    return ResponseService.internalError(res, `Erro no cadastro de ranking`);
  }
};

const getAll = async (req, res) => {
  try {
    const { page, pageSize } = req.query;

    const rankings = await RankingService.getAll(page, pageSize);

    return ResponseService.ok(res, rankings);
  } catch (error) {
    return ResponseService.internalError(res, `Erro ao buscar rankings`);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const ranking = await RankingService.getById(id);

    if (!ranking)
      return ResponseService.badRequest(res, "Ranking não encontrado");

    return ResponseService.ok(res, ranking);
  } catch (error) {
    return ResponseService.internalError(res, `Erro ao buscar ranking`);
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const { playerName, time, attempts, primeNumber } = req.body;

    const updatedRanking = await RankingService.edit(id, {
      playerName,
      time,
      attempts,
      primeNumber,
      updateAt: new Date(),
    });

    return ResponseService.ok(res, updatedRanking);
  } catch (error) {
    return ResponseService.internalError(res, `Erro ao editar ranking`);
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const removedRanking = await RankingService.remove(id);
    let message = "Erro ao remover ranking";

    if (!removedRanking) {
      message = "Removido com sucesso";
      return res.status(204).json({ message });
    }

    return res.status(404).json({ message });
  } catch (error) {
    return ResponseService.internalError(res, `Erro ao deletar ranking`);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
};
