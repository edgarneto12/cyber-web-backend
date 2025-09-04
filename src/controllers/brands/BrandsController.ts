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
}
