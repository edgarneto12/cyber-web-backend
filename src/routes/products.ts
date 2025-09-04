import { Router } from 'express';
import { ProductsController } from '../controllers/products/ProductsController';

const router = Router();
const productsController = new ProductsController();

router.get('/tag/:tag_name', productsController.getByTag.bind(productsController));

router.get('/reviews/:product_id', productsController.getReviews.bind(productsController));

router.get('/related/:brand', productsController.getRelatedByBrand.bind(productsController));

router.get('/category/:category_name', productsController.getByCategoryName.bind(productsController));

router.get('/:id', productsController.getById.bind(productsController));

router.get('/', productsController.getAll.bind(productsController));

export default router;
