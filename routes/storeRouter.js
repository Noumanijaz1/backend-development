// External Module
const express = require("express");
const storeRouter = express.Router();

// Local Module
const {
  getIndex,
  getHomes,
  getBookings,
  getFavouriteList,
} = require("../controllers/store");

storeRouter.get("/", getIndex);
storeRouter.get("/homes", getHomes);
storeRouter.get("/bookings", getBookings);
storeRouter.get("/favourites", getFavouriteList);

module.exports = storeRouter;
