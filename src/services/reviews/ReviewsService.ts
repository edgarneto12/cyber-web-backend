import { prisma } from '../../config/prisma';

export class ReviewsService {
  async getSummary(productId: number) {
    const reviews = await prisma.review.findMany({
      where: { productId },
      select: { rating: true }
    });

    const totalReviews = reviews.length;
    
    if (totalReviews === 0) {
      return {
        reviews: 0,
        excellent: 0,
        good: 0,
        average: 0,
        below_average: 0,
        poor: 0,
        media: 0
      };
    }

    const ratingCounts = {
      excellent: reviews.filter(r => r.rating === 5).length,
      good: reviews.filter(r => r.rating === 4).length,
      average: reviews.filter(r => r.rating === 3).length,
      below_average: reviews.filter(r => r.rating === 2).length,
      poor: reviews.filter(r => r.rating === 1).length
    };

    const totalRatingSum = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = Number((totalRatingSum / totalReviews).toFixed(1));

    return {
      reviews: totalReviews,
      excellent: ratingCounts.excellent,
      good: ratingCounts.good,
      average: ratingCounts.average,
      below_average: ratingCounts.below_average,
      poor: ratingCounts.poor,
      media: averageRating
    };
  }
}
