"use strict";

const prisma_client = require("../helpers/prisma_client");

var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCart = exports.setCart = void 0;
const redis_client_1 = __importDefault(require("../helpers/redis_client"));
function setCart(username, item, count) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      if (count < 0) {
        yield redis_client_1.default.hDel(
          "cart:" + username,
          JSON.stringify(item.id)
        );
      } else {
        let result = JSON.parse(
          yield redis_client_1.default.hGet(
            "cart:" + username,
            JSON.stringify(item.id)
          )
        );
        if (result) {
          let newQuantity = result.quantity + count;
          yield redis_client_1.default.hSet(
            "cart:" + username,
            JSON.stringify(item.id),
            JSON.stringify({ id: item.id, quantity: newQuantity })
          );
        } else {
          yield redis_client_1.default.hSet(
            "cart:" + username,
            JSON.stringify(item.id),
            JSON.stringify({ id: item.id, quantity: count })
          );
        }
      }
    } catch (error) {
      throw error;
    }
  });
}
exports.setCart = setCart;
function getAllCart(username) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const data = yield redis_client_1.default.hGetAll("cart:" + username);
      const key = Object.keys(data);
      const newKey = key.map((item) => +item);
      const data1 = newKey.map((item) => {
        return {
          item,
          quantity: JSON.parse(data[item]).quantity,
        };
      });
      console.log(data1);
      console.log("newKey", newKey);
      const carts = yield prisma_client.sanpham.findMany({
        where: {
          id: { in: newKey },
        },
        include: {
          giasanpham: {
            select: {
              gia: true,
            },
          },
        },
      });

      const newCart = carts.map((item) => {
        return { ...item, quantity: JSON.parse(data[item.id]).quantity };
      });
      return newCart;
    } catch (error) {
      throw error;
    }
  });
}
exports.getAllCart = getAllCart;

function getTotalCart(username) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const data = yield redis_client_1.default.hLen("cart:" + username);
      if (data) {
        return {
          code: 200,
          total: data,
        };
      }
      return data;
    } catch (error) {
      throw error;
    }
  });
}
exports.getTotalCart = getTotalCart;

function updateCart(username, item, count) {
  return __awaiter(this, void 0, void 0, function* () {
    try {
      const data = yield redis_client_1.default.hSet(
        "cart:" + username,
        JSON.stringify(item.id),
        JSON.stringify({ id: item.id, quantity: count })
      );
      return {
        error: 0,
        message: "update success",
      };
    } catch (error) {
      throw error;
    }
  });
}
exports.updateCart = updateCart;
