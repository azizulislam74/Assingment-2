import mongoose, { Schema, model } from 'mongoose';
import { orderProduct } from './order.interface';


const orderProductSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        match: [/.+\@.+\..+/, ' valid email address checking ']
    },
    productId: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    quantity: {
        type: Number,
        required: true,
        min: 1
    }
}, {
    timestamps: true
});

export const OrderProduct = model<orderProduct>('OrderProduct', orderProductSchema);

