import {prisma} from '../../config/prisma';

export class BrandsService {
  async getAllBrands() {
    const brands = await prisma.product.groupBy({
      by: ['brand'],
      _count: { brand: true },
    });
    return brands.map((item: { brand: string; _count: { brand: number } }, idx: number) => ({
      id: idx + 1,
      brand: item.brand,
      total: item._count.brand,
    }));
  }

  async getBrandsByCategory(categoryName: string) {
    const brands = await prisma.product.groupBy({
      by: ['brand'],
      where: {
        category: {
          name: categoryName,
        },
      },
      _count: {
        brand: true,
      },
      orderBy: {
        brand: 'asc',
      },
    });
    return brands.map((item, idx) => ({
      id: idx + 1,
      brand: item.brand,
      total: item._count.brand,
    }));
  }
}
