import  express from 'express';
import { OrderContollar } from './order.contollar';



const router = express.Router();


router.post("/", OrderContollar.createOrder);
router.get("/", OrderContollar.getAllOrder);



export const OrderRouters = router;