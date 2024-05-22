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
exports.ProductControllers = void 0;
const products_service_1 = require("./products.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield products_service_1.ProductService.createProduct(productData);
    res.json({
        success: false,
        message: 'Product created successfully!',
        data: result,
    });
});
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductService.getAllProducts();
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product fetched unsuccessfully!",
            error: err,
        });
    }
});
const getProductsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.ProductService.getProductsById();
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Product fetched unsuccessfully!",
            error: err,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProducts,
};
