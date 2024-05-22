import  {Product}  from './product.modules';

import  express from 'express';
import { Response,  Request } from 'express';


const router = express.Router();

router.post ('/', async (req : Request, res : Response) => {
const result = await Product.create(req.body);
res.json({
    success :false,
    message:'Product created successfully!',
    data: result,
});


});

export const ProductRoutes = router;
