import { prisma } from '../../config/prisma';

export class ProductsService {
	// GET /api/products/:id
	async getById(productId: number) {
		return prisma.product.findUnique({
			where: { id: productId },
			include: {
				category: { select: { id: true, name: true } },
				smartphone_spec: true,
				colors: { select: { id: true, name: true, hex_code: true } },
				storage_options: { select: { id: true, size: true } },
				reviews: {
					select: { id: true, rating: true, message: true, name_user: true, url_image_user: true, created_at: true },
					take: 5,
					orderBy: { created_at: 'desc' }
				}
			}
		});
	}

	// GET /api/products/tag/:tag_name
	async getByTag(tag_name: string) {
		return prisma.product.findMany({
			where: { tag: tag_name },
			select: { id: true, name: true, price: true, tag: true, url_image: true, discounted_price: true },
		});
	}

	// GET /api/products
	async getAll({ page = 1, sort = 'price', order = 'asc', categoryIds }: { page?: number; sort?: string; order?: 'asc'|'desc'; categoryIds?: number[] }) {
		const take = 10;
		const skip = (page - 1) * take;
		const where = categoryIds ? { categoryId: { in: categoryIds } } : {};
		const total_items = await prisma.product.count({ where });
		const total_pages = Math.ceil(total_items / take);
		const products = await prisma.product.findMany({
			where,
			orderBy: { [sort]: order },
			skip,
			take,
			select: { id: true, name: true, price: true, url_image: true },
		});
		return { products, metadata: { total_pages, actual_page: page, total_items } };
	}

	// GET /api/products/category/:category_name
	async getByCategoryName(category_name: string, page = 1, sort = 'price', order: 'asc'|'desc' = 'asc', brands?: string[]) {
		const take = 10;
		const skip = (page - 1) * take;
		const where: any = { category: { name: category_name } };
		if (brands && brands.length > 0) where.brand = { in: brands };
		const total_items = await prisma.product.count({ where });
		const total_pages = Math.ceil(total_items / take);
		const products = await prisma.product.findMany({
			where,
			orderBy: { [sort]: order },
			skip,
			take,
			select: { id: true, name: true, price: true, url_image: true },
		});
		return { products, metadata: { total_pages, actual_page: page, total_items } };
	}

	// GET /api/products/reviews/:product_id
	async getReviews(productId: number) {
		const reviews = await prisma.review.findMany({
			where: { productId },
			select: { id: true, name_user: true, url_image_user: true, message: true, rating: true, created_at: true },
		});
		const total = reviews.length;
		const summary = {
			reviews: total,
			excellent: reviews.filter((r: { rating: number }) => r.rating === 5).length,
			good: reviews.filter((r: { rating: number }) => r.rating === 4).length,
			avarage: reviews.filter((r: { rating: number }) => r.rating === 3).length,
			bellow_average: reviews.filter((r: { rating: number }) => r.rating === 2).length,
			poor: reviews.filter((r: { rating: number }) => r.rating === 1).length,
			media: total
				? (
						reviews.reduce(
							(acc: number, r: { rating: number }) => acc + r.rating,
							0
						) / total
				  ).toFixed(1)
				: 0,
		};
		return { reviews, summary };
	}

	// GET /api/products/related/:brand
	async getRelatedByBrand(brand: string) {
		return prisma.product.findMany({
			where: { brand },
			select: { id: true, name: true, price: true, url_image: true },
		});
	}
}
