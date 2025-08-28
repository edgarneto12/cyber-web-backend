import { Request, Response } from 'express';
import { CategoriesService } from '../../services/categories/CategoriesService';

const categoriesService = new CategoriesService();

export class CategoriesController {
  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoriesService.getAllCategories();
      
      
      const categoryNames = categories.map((category: any) => category.name);
      
      return res.status(200).json({
        data: categoryNames
      });
    } catch (error) {
      console.error('Error in getAllCategories:', error);
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Failed to fetch categories'
      });
    }
  }

  async getCategoryById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const categoryId = parseInt(id);

      if (isNaN(categoryId)) {
        return res.status(400).json({
          error: 'Invalid category ID'
        });
      }

      const category = await categoriesService.getCategoryById(categoryId);

      if (!category) {
        return res.status(404).json({
          error: 'Category not found'
        });
      }

      return res.status(200).json({
        data: category
      });
    } catch (error) {
      console.error('Error in getCategoryById:', error);
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Failed to fetch category'
      });
    }
  }
}