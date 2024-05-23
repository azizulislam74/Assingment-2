import { Request, Response, query } from "express";
import { ProductService } from "./products.service";

// create product 
const createProduct = async (req: Request, res: Response) => {
  const productData = req.body;
  const result = await ProductService.createProduct(productData);

  res.json({
    success: false,
    message: "Product created successfully!",
    data: result,
  });
};

// get all product 
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    const result = await ProductService.getAllProducts(searchTerm as string);

    res.status(200).json({
      success: true,
      message: "Products matching search term 'iphone' fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Products matching search term 'iphone' fetched unsuccessfully!",
      error: err,
    });
  }
};
// get product by id 
const getProductsById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    console.log(productId);
    const result = await ProductService.getProductsById(productId);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product fetched unsuccessfully!",
      error: err,
    });
  }
};

// updated product by id
const updateProductsById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    console.log(productId);
    const result = await ProductService.updateProductsById(productId, product);

    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product updated unsuccessfully!",
      error: err,
    });
  }
};

// deletd producted by id 
const deletedProductsById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = req.body;
    console.log(productId);
    const result = await ProductService.deletedProductsById(productId, product);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "Product deleted unsuccessfully",
      error: err,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProductsById,
  deletedProductsById,
};
