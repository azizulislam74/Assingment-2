"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const order_modules_1 = require("./order.modules");
// create order
const createOrder = (placeOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield order_modules_1.OrderProduct.create(placeOrder);
    return result;
});
// get all order here
const getAllOrder = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const productOrder = yield order_modules_1.OrderProduct.find(email);
    return productOrder;
});
exports.OrderService = {
    createOrder,
    getAllOrder,
};
