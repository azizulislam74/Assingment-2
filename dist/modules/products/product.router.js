"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_contollar_1 = require("./product.contollar");
const router = express_1.default.Router();
router.post('/', product_contollar_1.ProductControllers.createProduct);
router.get('/', product_contollar_1.ProductControllers.getAllProducts);
router.get('/:productId', product_contollar_1.ProductControllers.getProductsById);
router.put('/:productId', product_contollar_1.ProductControllers.updateProductsById);
exports.ProductRoutes = router;
