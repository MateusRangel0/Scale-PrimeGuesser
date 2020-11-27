const express = require("express");
const ranking = require("./application/Routes/ranking.routes");

const routes = express.Router();

// API is up?
routes.get("/", (_, res) => {
  res.send("API CHECK :)");
});

// Ranking route
routes.use("/ranking", ranking);

module.exports = routes;
