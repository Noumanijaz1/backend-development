// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const { getHomes } = require("../controllers/homes");

storeRouter.get("/", getHomes);

module.exports = storeRouter;
