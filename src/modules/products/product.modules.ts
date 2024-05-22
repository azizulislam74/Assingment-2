
import mongoose, { Schema, model } from "mongoose";
import { IProduct, Product,VProduct } from "./products-interface";




// Define the TagProduct schema


// Define the VProduct schema
const vProductSchema = new Schema<VProduct>({
    type: { type: String, required: true },
    value: { type: String, required: true },
}, { _id: false });

// Define the IProduct schema
const iProductSchema = new Schema<IProduct>({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, { _id: false });

// Define the main Product schema
const productSchema = new Schema<Product>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: [String],
    variants: [vProductSchema],
    inventory: [iProductSchema],
});

export const productS = model<Product>('Product', productSchema);


