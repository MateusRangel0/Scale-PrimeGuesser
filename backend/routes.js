const express = require("express");

const routes = express.Router();

routes.get("/", (_, res) => {
  res.send("API CHECK :)");
});

module.exports = routes;
