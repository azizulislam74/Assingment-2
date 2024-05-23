import { Request, Response } from "express";
import { OrderService } from "./order.service";

//create order
const createOrder = async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await OrderService.createOrder(orderData);
  res.json({
    success: true,
    message: "Order created successfully!",
    data: result,
  });
};

// get all order
const getAllOrder = async (req: Request, res: Response) => {
  try {
    const email = req.query;
    console.log(email);
    const result = await OrderService.getAllOrder(req.query);
    

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    // error handling
    res.status(500).json({
      success: false,
      message: "Orders fetched unsuccessfully!",
      error: err,
    });
  }
};

export const OrderContollar = {
  createOrder,
  getAllOrder,
};
