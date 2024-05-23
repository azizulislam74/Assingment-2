import express, { Request, Response } from "express"
import { ProductRoutes } from "./modules/products/product.router";
import bodyParser from "body-parser";
import { OrderRouters } from "./modules/Orders/order.router";
const app = express();

//Parsers 
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api/products", ProductRoutes);
app.use("/api/orders", OrderRouters);






export default app;