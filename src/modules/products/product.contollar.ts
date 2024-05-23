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

const getAllProducts = async (req: Request,res:Response) => {
    try{
        const result = await ProductService.getAllProducts();
        
        res.status(200).json({
            success: true,
            message:"Product fetched successfully!",
            data: result,
        });
    }
    catch(err:any) {
        res.status(500).json({
            success: false,
            message: "Product fetched unsuccessfully!",
            error:err,
        })
    }

}

const getProductsById = async (req: Request,res:Response) => {
    try{
        const {productId} =req.params;
        console.log(productId);
        const result = await ProductService.getProductsById(productId);

        res.status(200).json({
            success: true,
            message:"Product fetched successfully!",
            data: result,
        });
    }
    catch(err:any) {
        res.status(500).json({
            success: false,
            message: "Product fetched unsuccessfully!",
            error:err,
        })
    }

}


const updateProductsById = async (req: Request,res:Response) => {
    try{
        const {productId} =req.params;
        const product = req.body;
        console.log(productId);
        const result = await ProductService.updateProductsById(productId,product);

        res.status(200).json({
            success: true,
            message:"Product updated successfully!",
            data: result,
        });
    }
    catch(err:any) {
        res.status(500).json({
            success: false,
            message: "Product updated unsuccessfully!",
            error:err,
        })
    }

}

export const ProductControllers = {
   createProduct, 
   getAllProducts,
   getProductsById,
   updateProductsById,
}