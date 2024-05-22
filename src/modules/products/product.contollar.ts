import { Request, Response } from "express";
import { ProductService } from "./products.service";


const createProduct = async (req : Request, res : Response) => {
const productData = req.body;
const result = await ProductService.createProduct(productData);

res.json({
    success :false,
    message:'Product created successfully!',
    data: result,
});


};

export const ProductControllers = {
   createProduct, 
}