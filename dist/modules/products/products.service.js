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
exports.ProductService = void 0;
const product_modules_1 = require("./product.modules");
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.productS.create(payload);
    return result;
});
const getAllProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.productS.find();
    return result;
});
const getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.productS.findById(id);
    return result;
});
exports.ProductService = {
    createProduct,
    getAllProducts,
    getProductsById,
};
