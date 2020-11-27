const express = require("express");
const ranking = require("./application/Routes/ranking.routes");

const routes = express.Router();

routes.get("/", (_, res) => {
  res.send("API CHECK :)");
});

routes.use("/ranking", ranking);

module.exports = routes;
