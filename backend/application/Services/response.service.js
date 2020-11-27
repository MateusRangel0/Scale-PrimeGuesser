module.exports = {
  ok(res, content = {}) {
    res.status(200);
    res.json(content);
  },

  badRequest(res, message) {
    res.status(400);
    res.json({ Error: message });
  },

  internalError(res, error) {
    res.status(500);
    res.json({ Error: error.stack || error });
  },

  notFound(res, error) {
    res.status(404);
    res.json({ Error: error.stack || error });
  },
};
