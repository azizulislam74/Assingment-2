import express, { Request, Response } from "express"
import { ProductRoutes } from "./modules/products/product.router";
import bodyParser from "body-parser";
const app = express();

//Parsers 
// app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/api/products", ProductRoutes);


app.get('/', (req :Request, res: Response) => {
  res.send('Hello !');
})



export default app;