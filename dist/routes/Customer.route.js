"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
// const {Router} = require('express');
const express_1 = require("express");
const Customer_controller_1 = __importDefault(require("../controllers/Customer.controller"));
const route = (0, express_1.Router)();
route.get('/getCustomer', Customer_controller_1.default.getCustomer);
route.post('/addCustomer', Customer_controller_1.default.addCustomer);
route.post('/deleteCustomer', Customer_controller_1.default.deleteCustomer);
route.post('/editCustomer', Customer_controller_1.default.editCustomer);
module.exports = route;
