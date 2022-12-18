"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const Home_route_1 = __importDefault(require("./Home.route"));
const Book_route_1 = __importDefault(require("./Book.route"));
const Employee_route_1 = __importDefault(require("./Employee.route"));
const Customer_route_1 = __importDefault(require("./Customer.route"));
const User_route_1 = __importDefault(require("./User.route"));
const Cart_route_1 = __importDefault(require("./Cart.route"));
const Product_route_1 = __importDefault(require("./Product.route"));
const Order_route_1 = __importDefault(require("./Order.route"));
const Stationery_route_1 = __importDefault(require("./Stationery.route"));
const Login_middleware_1 = require("../middlewares/Login.middleware");
function route(app) {
  app.use("/stationery", Stationery_route_1.default);
  app.use("/book", Book_route_1.default);
  app.use("/employee", Login_middleware_1.checkLogin, Employee_route_1.default);
  app.use("/customer", Login_middleware_1.checkLogin, Customer_route_1.default);
  app.use("/product", Product_route_1.default);
  app.use("/user", User_route_1.default);
  app.use("/cart", Cart_route_1.default);
  app.use("/order", Order_route_1.default);
  app.use("/", Home_route_1.default);
}
module.exports = route;
