"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
const express_1 = require("express");
const Stationery_controller_1 = __importDefault(
  require("../controllers/Stationery.controller")
);
const route = (0, express_1.Router)();
route.get("/getstationery", Stationery_controller_1.default.getStationery);
module.exports = route;
