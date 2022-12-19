"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
// const { Router } = require('express');
const express_1 = require("express");
const Book_controller_1 = __importDefault(
  require("../controllers/Book.controller")
);
const route = (0, express_1.Router)();
route.get("/getBook", Book_controller_1.default.getListBook);
route.post("/addBook", Book_controller_1.default.addNewBook);
route.post("/deleteBook", Book_controller_1.default.deleteBook);
route.post("/editBook", Book_controller_1.default.editBook);
route.get("/", (req, res, next) => {
  res.send("Book hello");
});
module.exports = route;
