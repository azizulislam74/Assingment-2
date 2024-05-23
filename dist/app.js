"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const product_router_1 = require("./modules/products/product.router");
const body_parser_1 = __importDefault(require("body-parser"));
const order_router_1 = require("./modules/Orders/order.router");
const app = (0, express_1.default)();
//Parsers
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// product router
app.use("/api/products", product_router_1.ProductRoutes);
// order router 
app.use("/api/orders", order_router_1.OrderRouters);
exports.default = app;
