"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_contollar_1 = require("./product.contollar");
const router = express_1.default.Router();
// create product
router.post("/", product_contollar_1.ProductControllers.createProduct);
// get all products
router.get("/", product_contollar_1.ProductControllers.getAllProducts);
//get products by id
router.get("/:productId", product_contollar_1.ProductControllers.getProductsById);
// update products y id
router.put("/:productId", product_contollar_1.ProductControllers.updateProductsById);
// deleted products y id
router.delete("/:productId", product_contollar_1.ProductControllers.deletedProductsById);
exports.ProductRoutes = router;
