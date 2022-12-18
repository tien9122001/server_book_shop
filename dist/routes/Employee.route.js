"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// const { Router } = require('express');
const express_1 = require("express");
const Employee_controller_1 = __importDefault(require("../controllers/Employee.controller"));
const route = (0, express_1.Router)();
route.get('/getEmployee', Employee_controller_1.default.getEmployee);
route.post('/addEmployee', Employee_controller_1.default.addEmployee);
route.post('/editEmployee', Employee_controller_1.default.editEmployee);
route.post('/deleteEmployee', Employee_controller_1.default.deleteEmployee);
module.exports = route;
