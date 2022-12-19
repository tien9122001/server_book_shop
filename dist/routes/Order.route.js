"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
// const {Router} = require('express');

const verifyToken_middleware_1 = require("../middlewares/verifyToken.middleware");
const express_1 = require("express");
const Order_controller_1 = __importDefault(
  require("../controllers/Order.controller")
);

const verifyToken_1 = require("../middlewares/verifyToken.middleware");

const route = (0, express_1.Router)();
route.get(
  "/getAll",
  verifyToken_1.verifyToken,
  Order_controller_1.default.getAllOrder
);
module.exports = route;
