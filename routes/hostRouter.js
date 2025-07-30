const express = require("express");
const hostRouter = express.Router();

const {
  getAddHome,
  postAddHome,
  getHostHomes,
} = require("../controllers/host");

hostRouter.get("/add-home", getAddHome);

hostRouter.post("/add-home", postAddHome);
hostRouter.get("/host-home-list", getHostHomes);

module.exports = hostRouter;
