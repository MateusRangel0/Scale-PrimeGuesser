const express = require("express");
const Controller = require("../Controllers/ranking.controller");

const router = express.Router();

router.get("/", Controller.getAll);

module.exports = router;
