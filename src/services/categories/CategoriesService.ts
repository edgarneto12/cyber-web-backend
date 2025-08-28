import { prisma } from '../../config/prisma';

export class CategoriesService {
  async getAllCategories() {
    try {
      const categories = await prisma.category.findMany({
        select: {
          id: true,
          name: true,
          description: true,
          created_at: true,
          updated_at: true
        },
        orderBy: {
          name: 'asc'
        }
      });

      return categories;
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  }

  async getCategoryById(id: number) {
    try {
      const category = await prisma.category.findUnique({
        where: { id },
        select: {
          id: true,
          name: true,
          description: true,
          created_at: true,
          updated_at: true
        }
      });

      return category;
    } catch (error) {
      console.error('Error fetching category:', error);
      throw new Error('Failed to fetch category');
    }
  }
}