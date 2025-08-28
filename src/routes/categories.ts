import { Router } from 'express';
import { CategoriesController } from '../controllers/categories/CategoriesController';

const router = Router();
const categoriesController = new CategoriesController();

// GET /api/categories 
router.get('/', categoriesController.getAllCategories);

// GET /api/categories/:id 
router.get('/:id', categoriesController.getCategoryById);

export { router as categoriesRouter };
