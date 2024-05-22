import express, { Request, Response } from "express"
import { ProductRoutes } from "./modules/products/product.router";
const app = express()

//Parsers 
app.use(express.json())

app.use("/api/products", ProductRoutes);



app.get('/', (req :Request, res: Response) => {
  res.send('Hello !');
})



export default app;