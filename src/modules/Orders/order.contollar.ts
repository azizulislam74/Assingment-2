import { Request, Response } from "express";
import { OrderService } from "./order.service";


const createOrder = async (req : Request, res : Response) => {
    const orderData = req.body;
    const result = await OrderService.createOrder(orderData);
    res.json({
        success :true,
        message:'Order created successfully!',
        data: result,
    });
    
    };




    const getAllOrder = async (req: Request,res:Response) => {
        try{
         
            const email = req.query;
            const result = await OrderService.getAllOrder(email as string);
            
            res.status(200).json({
                success: true,
                message:"Orders fetched successfully!",
                data: result,
            });
        }
        catch(err:any) {
            res.status(500).json({
                success: false,
                message: "Orders fetched unsuccessfully!",
                error:err,
            })
        }
    
    }




    export const OrderContollar ={
        createOrder,
        getAllOrder,

    }
