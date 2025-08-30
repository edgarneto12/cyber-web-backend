import { Router } from 'express';
import { ReviewsController } from '../controllers/reviews/ReviewsController';

const router = Router();
const reviewsController = new ReviewsController();

// GET /api/reviews/summary/:product_id
router.get('/summary/:product_id', reviewsController.getSummary.bind(reviewsController));

export default router;
