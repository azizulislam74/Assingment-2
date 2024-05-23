import express from "express";
import { ProductControllers } from "./product.contollar";

const router = express.Router();
// create product
router.post("/", ProductControllers.createProduct);
// get all products
router.get("/", ProductControllers.getAllProducts);
//get products by id
router.get("/:productId", ProductControllers.getProductsById);
// update products y id
router.put("/:productId", ProductControllers.updateProductsById);
// deleted products y id
router.delete("/:productId", ProductControllers.deletedProductsById);

export const ProductRoutes = router;
