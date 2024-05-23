"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productS = void 0;
const mongoose_1 = require("mongoose");
//  VProduct schema
const vProductSchema = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
}, { _id: false });
//  IProduct schema
const iProductSchema = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
}, { _id: false });
// main Product schema
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: [String],
    variants: [vProductSchema],
    inventory: [iProductSchema],
});
exports.productS = (0, mongoose_1.model)("Product", productSchema);
