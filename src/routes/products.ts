import { Router } from 'express';
import { ProductsController } from '../controllers/products/ProductsController';

const router = Router();
const productsController = new ProductsController();

// GET /api/products/tag/:tag_name
router.get('/tag/:tag_name', productsController.getByTag.bind(productsController));

// GET /api/products/reviews/:product_id
router.get('/reviews/:product_id', productsController.getReviews.bind(productsController));

// GET /api/products/related/:brand
router.get('/related/:brand', productsController.getRelatedByBrand.bind(productsController));

// GET /api/products/category/:category_name
router.get('/category/:category_name', productsController.getByCategoryName.bind(productsController));

// GET /api/products/:id (produto individual)
router.get('/:id', productsController.getById.bind(productsController));

// GET /api/products
router.get('/', productsController.getAll.bind(productsController));

export default router;
