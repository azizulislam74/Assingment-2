import { productS } from "./product.modules";
import { Product } from "./products-interface";

const createProduct = async (payload :Product)=> {
    const result = await productS.create(payload);
    return result;
};
const getAllProducts = async (searchTerm?: string)=> {
    // const result = await productS.find({searchTerm});
    // return result;
    if (searchTerm) {
        // const product = await new ProductModel()
        // const result = product.save()
    
        const product = await productS.find({ $or: [
            { name: { $regex: searchTerm, $options: 'i' } }, 
            { tags: { $in: [searchTerm] } }, 
            { description: { $regex: searchTerm, $options: 'i' } }
        ] });
        return product;
      } else {
        const result = await productS.find();
        return result;
      }
};

const getProductsById = async (id:string)=> {
    console.log(id);
    const result = await productS.findById(id);
    console.log(result);
    return result;
};

const updateProductsById = async (id:string, product:Product)=> {
    console.log(id);
    const result = await productS.findByIdAndUpdate(id,product);
    console.log(result);
    return result;
};

const deletedProductsById = async (id:string, product:Product)=> {
    console.log(id);
    const result = await productS.findByIdAndDelete(id,product);
    console.log(result);
    return result;
};

export const ProductService ={
    createProduct,
    getAllProducts,
    getProductsById,
    updateProductsById,
    deletedProductsById,
}