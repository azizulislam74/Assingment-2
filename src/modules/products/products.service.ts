import { productS } from "./product.modules";
import { Product } from "./products-interface";

const createProduct = async (payload :Product)=> {
    const result = await productS.create(payload);
    return result;
};
const getAllProducts = async ()=> {
    const result = await productS.find();
    return result;
};


export const ProductService ={
    createProduct,
    getAllProducts,
}