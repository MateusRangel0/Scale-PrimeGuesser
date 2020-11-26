const express = require("express");

const routes = express.Router();

routes.get("/ping", (req, res) => {
  res.send({ message: "pong" }).status(200);
});

module.exports = routes;
