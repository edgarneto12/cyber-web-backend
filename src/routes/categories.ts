import { Router } from 'express';
import { CategoriesController } from '../controllers/categories/CategoriesController';

const router = Router();
const categoriesController = new CategoriesController();

router.get('/', categoriesController.getAllCategories);

router.get('/:id', categoriesController.getCategoryById);

export { router as categoriesRouter };
