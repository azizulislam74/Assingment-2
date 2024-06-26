import { productS } from "./product.modules";
import { Product } from "./products-interface";

//create product 
const createProduct = async (payload: Product) => {
  const result = await productS.create(payload);
  return result;
};
const getAllProducts = async (searchTerm?: string) => {
  if (searchTerm) {
    const product = await productS.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { tags: { $in: [searchTerm] } },
        { description: { $regex: searchTerm, $options: "i" } },
      ],
    });
    return product;
  } else {
    const result = await productS.find();
    return result;
  }
};

// get products by id 
const getProductsById = async (id: string) => {
  console.log(id);
  const result = await productS.findById(id);
  console.log(result);
  return result;
};

// update products by id 
const updateProductsById = async (id: string, product: Product) => {
  console.log(id);
  const result = await productS.findByIdAndUpdate(id, product);
  console.log(result);
  return result;
};
// deleted product by id 
const deletedProductsById = async (id: string, product: Product) => {
  console.log(id);
  const result = await productS.findByIdAndDelete(id, product);
  console.log(result);
  return result;
};

export const ProductService = {
  createProduct,
  getAllProducts,
  getProductsById,
  updateProductsById,
  deletedProductsById,
};
