import express from "express";
import { OrderContollar } from "./order.contollar";

const router = express.Router();

// post router create order
router.post("/", OrderContollar.createOrder);
// get router get all order
router.get("/", OrderContollar.getAllOrder);

export const OrderRouters = router;
