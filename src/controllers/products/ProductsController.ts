import { ProductsService } from '../../services/products/ProductsService';
import { Request, Response } from 'express';

export class ProductsController {
  private productsService = new ProductsService();

  async getByTag(req: Request, res: Response) {
    const { tag_name } = req.params;
    try {
      const products = await this.productsService.getByTag(tag_name);
      res.json({ data: products });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products by tag.' });
    }
  }

  async getAll(req: Request, res: Response) {
    const page = parseInt(req.query.page as string) || 1;
    const sort = (req.query.sort as string) || 'price';
    const order = (req.query.order as string) === 'desc' ? 'desc' : 'asc';
    const categoryIds = Array.isArray(req.body?.category) ? req.body.category : undefined;
    try {
      const result = await this.productsService.getAll({ page, sort, order, categoryIds });
      res.json({ data: result.products, metadata: result.metadata });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products.' });
    }
  }

  async getByCategoryName(req: Request, res: Response) {
    const { category_name } = req.params;
    const page = parseInt(req.query.page as string) || 1;
    const sort = (req.query.sort as string) || 'price';
    const order = (req.query.order as string) === 'desc' ? 'desc' : 'asc';
    const brandsQuery = req.query.brands as string;
    const brands = brandsQuery ? brandsQuery.split(',') : undefined;

    try {
      const result = await this.productsService.getByCategoryName(category_name, page, sort, order, brands);
      res.json({ data: result.products, metadata: result.metadata });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products by category.' });
    }
  }

  async getById(req: Request, res: Response) {
    const productId = Number(req.params.id);
    if (!productId) return res.status(400).json({ error: 'Invalid product ID' });
    try {
      const product = await this.productsService.getById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.json({ data: product });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching product.' });
    }
  }

  async getReviews(req: Request, res: Response) {
    const productId = Number(req.params.product_id);
    if (!productId) return res.status(400).json({ error: 'Invalid product_id' });
    try {
      const result = await this.productsService.getReviews(productId);
      res.json({ data: result.reviews, summary: result.summary });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching reviews.' });
    }
  }

  async getRelatedByBrand(req: Request, res: Response) {
    const brand = req.params.brand;
    if (!brand) return res.status(400).json({ error: 'Invalid brand' });
    try {
      const products = await this.productsService.getRelatedByBrand(brand);
      res.json({ data: products });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching related products.' });
    }
  }
}
