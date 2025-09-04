import { Router } from 'express';
import { BrandsController } from '../controllers/brands/BrandsController';

const router = Router();
const brandsController = new BrandsController();

router.get('/', brandsController.getAllBrands.bind(brandsController));

export default router;
