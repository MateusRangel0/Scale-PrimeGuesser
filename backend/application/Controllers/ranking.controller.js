const RankingService = require("../Services/ranking.service");
const ResponseService = require("../Services/response.service");

const create = async (req, res) => {
  try {
    if (!req.body.playerName)
      return ResponseService.badRequest(res, "Nome não fornecido");

    if (!req.body.time)
      return ResponseService.badRequest(res, "Tempo não fornecido");

    if (!req.body.attempts)
      return ResponseService.badRequest(
        res,
        "Número de tentativas não fornecido"
      );

    if (!req.body.primeNumber)
      return ResponseService.badRequest(res, "Número primo não fornecido");

    const newRanking = await RankingService.create(req.body);

    return ResponseService.ok(res, newRanking);
  } catch (error) {
    return ResponseService.internalError(
      res,
      `Erro no cadastro de ranking, ${error.message}`
    );
  }
};

const getAll = async (req, res) => {
  try {
    const rankings = await RankingService.getAll(req.query);

    return ResponseService.ok(res, rankings);
  } catch (error) {
    return ResponseService.internalError(
      res,
      `Erro ao buscar rankings, ${error.message}`
    );
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
    return ResponseService.internalError(
      res,
      `Erro ao buscar ranking, ${error.message}`
    );
  }
};

const edit = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedRanking = await RankingService.edit(id, {
      ...req.body,
      updateAt: new Date(),
    });

    return ResponseService.ok(res, updatedRanking);
  } catch (error) {
    return ResponseService.internalError(
      res,
      `Erro ao editar ranking, ${error.message}`
    );
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;

    return await RankingService.remove(id);
  } catch (error) {
    return ResponseService.internalError(
      res,
      `Erro ao deletar ranking, ${error.message}`
    );
  }
};

module.exports = {
  create,
  getAll,
  getById,
  edit,
  remove,
};
