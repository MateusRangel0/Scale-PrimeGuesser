const express = require("express");
const Controller = require("../Controllers/ranking.controller");

const router = express.Router();

router.get("/", Controller.getAll);
router.get("/:id", Controller.getById);
router.post("/", Controller.create);

module.exports = router;
