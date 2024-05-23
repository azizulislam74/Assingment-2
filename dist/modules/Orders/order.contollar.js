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
exports.OrderContollar = void 0;
const order_service_1 = require("./order.service");
//create order
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = req.body;
    const result = yield order_service_1.OrderService.createOrder(orderData);
    res.json({
        success: true,
        message: "Order created successfully!",
        data: result,
    });
});
// get all order
const getAllOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query;
        console.log(email);
        const result = yield order_service_1.OrderService.getAllOrder(req.query);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        // error handling
        res.status(500).json({
            success: false,
            message: "Orders fetched unsuccessfully!",
            error: err,
        });
    }
});
exports.OrderContollar = {
    createOrder,
    getAllOrder,
};
