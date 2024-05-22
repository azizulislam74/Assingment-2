
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the TagProduct schema
const tagProductSchema = new Schema({
    smartphone: { type: String, required: true },
    Apple: { type: String, required: true },
    iOS: { type: String, required: true },
}, { _id: false });

// Define the VProduct schema
const vProductSchema = new Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
}, { _id: false });

// Define the IProduct schema
const iProductSchema = new Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, { _id: false });

// Define the main Product schema
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: [tagProductSchema],
    variants: [vProductSchema],
    inventory: iProductSchema,
});

export const Product = mongoose.model('Product', productSchema);

module.exports = Product;
