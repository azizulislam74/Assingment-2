
import  express from 'express';
import { Response,  Request } from 'express';
import { productS } from './product.modules';
import { ProductControllers } from './product.contollar';


const router = express.Router();

router.post ('/', ProductControllers.createProduct);
router.get ('/', ProductControllers.getAllProducts);

export const ProductRoutes = router;

