import {prisma} from '../../config/prisma';

export class CategoriesService {
  async getAllCategories() {
    try {
      return await prisma.category.findMany({
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
    } catch (error) {
      console.error('Error fetching categories:', error);
      throw new Error('Failed to fetch categories');
    }
  }

  async getCategoryById(id: number) {
    try {
      return await prisma.category.findUnique({
        where: {id},
        select: {
          id: true,
          name: true,
          description: true,
          created_at: true,
          updated_at: true
        }
      });
    } catch (error) {
      console.error('Error fetching category:', error);
      throw new Error('Failed to fetch category');
    }
  }
}