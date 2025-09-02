import { ReviewsService } from '../../services/reviews/ReviewsService';
import { Request, Response } from 'express';

export class ReviewsController {
  private reviewsService = new ReviewsService();

  // GET /api/reviews/summary/:product_id
  async getSummary(req: Request, res: Response) {
    const productId = Number(req.params.product_id);
    if (!productId) return res.status(400).json({ error: 'Invalid product_id' });
    try {
      const summary = await this.reviewsService.getSummary(productId);
      res.json({ data: summary });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reviews summary.' });
    }
  }
}
