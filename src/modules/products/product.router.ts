import  {Product}  from './product.modules';

import  express from 'express';
import { Response,  Request } from 'express';


const router = express.Router();

router.post ('/', async (req : Request, res : Response) => {
console.log(req.body);
// const result = await Product.create(req.body)


});

export const ProductRoutes = router;
