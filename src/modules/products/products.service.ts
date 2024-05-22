import { productS } from "./product.modules";
import { Product } from "./products-interface";

const createProduct = async (payload :Product)=> {
    const result = await productS.create(payload);
    return result;
};

export const ProductService ={
    createProduct,
}