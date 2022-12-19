"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
// const {Router} = require('express');
const express_1 = require("express");
const verifyToken_1 = require("../middlewares/verifyToken.middleware");
const Cart_controller_1 = __importDefault(
  require("../controllers/Cart.controller")
);
const route = (0, express_1.Router)();
route.post(
  "/setCart",
  verifyToken_1.verifyToken,
  Cart_controller_1.default.addToCart
);
route.get(
  "/getCart",
  verifyToken_1.verifyToken,
  Cart_controller_1.default.getCart
);

route.get(
  "/gettotalcart",
  verifyToken_1.verifyToken,
  Cart_controller_1.default.getTotalCart
);
route.post(
  "/updateCart",
  verifyToken_1.verifyToken,
  Cart_controller_1.default.updateCart
);
module.exports = route;
