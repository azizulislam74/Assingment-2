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
//create product 
const createProduct = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_modules_1.productS.create(payload);
    return result;
});
const getAllProducts = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (searchTerm) {
        const product = yield product_modules_1.productS.find({
            $or: [
                { name: { $regex: searchTerm, $options: "i" } },
                { tags: { $in: [searchTerm] } },
                { description: { $regex: searchTerm, $options: "i" } },
            ],
        });
        return product;
    }
    else {
        const result = yield product_modules_1.productS.find();
        return result;
    }
});
// get products by id 
const getProductsById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield product_modules_1.productS.findById(id);
    console.log(result);
    return result;
});
// update products by id 
const updateProductsById = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield product_modules_1.productS.findByIdAndUpdate(id, product);
    console.log(result);
    return result;
});
// deleted product by id 
const deletedProductsById = (id, product) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    const result = yield product_modules_1.productS.findByIdAndDelete(id, product);
    console.log(result);
    return result;
});
exports.ProductService = {
    createProduct,
    getAllProducts,
    getProductsById,
    updateProductsById,
    deletedProductsById,
};
