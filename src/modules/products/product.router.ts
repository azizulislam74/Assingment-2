
import  express from 'express';
import { ProductControllers } from './product.contollar';


const router = express.Router();

router.post ('/', ProductControllers.createProduct);
router.get ('/', ProductControllers.getAllProducts);
router.get ('/:productId', ProductControllers.getProductsById);
router.put ('/:productId', ProductControllers.updateProductsById);
router.delete ('/:productId', ProductControllers.deletedProductsById);

export const ProductRoutes = router;

