import { orderProduct } from "./order.interface";
import { OrderProduct } from "./order.modules";

// create order
const createOrder = async (placeOrder: orderProduct) => {
  const result = await OrderProduct.create(placeOrder);
  return result;
};
// get all order here
const getAllOrder = async (email:object) => {
  const productOrder = await OrderProduct.find(email);
  return productOrder;
};

export const OrderService = {
  createOrder,
  getAllOrder,
};
