import express, { Request, Response } from "express";
import { ProductRoutes } from "./modules/products/product.router";
import bodyParser from "body-parser";
import { OrderRouters } from "./modules/Orders/order.router";
const app = express();

//Parsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// product router
app.use("/api/products", ProductRoutes);
// order router 
app.use("/api/orders", OrderRouters);

export default app;
