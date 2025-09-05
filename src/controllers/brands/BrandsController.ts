import { BrandsService } from '../../services/brands/BrandsService';
import { Request, Response } from 'express';

export class BrandsController {
  private brandsService = new BrandsService();

  async getAllBrands(req: Request, res: Response) {
    try {
      const data = await this.brandsService.getAllBrands();
      res.json({ data });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching brands.' });
    }
  }

  async getBrandsByCategory(req: Request, res: Response) {
    const { category_name } = req.params;
    try {
      const data = await this.brandsService.getBrandsByCategory(category_name);
      res.json({ data });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching brands.' });
    }
  }
}
