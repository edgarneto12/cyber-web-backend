import { Router } from 'express';
import { prisma } from '../config/prisma';

const router = Router();

// GET /api/products/tag/:tag_name
router.get('/tag/:tag_name', async (req, res) => {
  const { tag_name } = req.params;
  try {
    const products = await prisma.product.findMany({
      where: { tag: tag_name },
      select: {
        id: true,
        name: true,
        price: true,
        tag: true,
        url_image: true,
      },
    });
    res.json({ data: products });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos por tag.' });
  }
});

// GET /api/brands
router.get('/brands', async (req, res) => {
  try {
    const brands = await prisma.product.groupBy({
      by: ['brand'],
      _count: { brand: true },
    });
    
    const data = brands.map((item, idx) => ({
      id: idx + 1,
      brand: item.brand,
      total: item._count.brand,
    }));
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar marcas.' });
  }
});

// GET /api/products?page=1&sort=price&order=asc
router.get('/', async (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const sort = (req.query.sort as string) || 'price';
  const order = (req.query.order as string) === 'desc' ? 'desc' : 'asc';
  const take = 10; 
  const skip = (page - 1) * take;

  
  const categoryIds = Array.isArray(req.body?.category) ? req.body.category : undefined;

  try {
    
    const total_items = await prisma.product.count({
      where: categoryIds ? { categoryId: { in: categoryIds } } : {},
    });
    const total_pages = Math.ceil(total_items / take);

    
    const products = await prisma.product.findMany({
      where: categoryIds ? { categoryId: { in: categoryIds } } : {},
      orderBy: { [sort]: order },
      skip,
      take,
      select: {
        id: true,
        name: true,
        price: true,
        url_image: true,
        
      },
    });

    res.json({
      data: products,
      metadata: {
        total_pages,
        actual_page: page,
        total_items,
      },
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar produtos.' });
  }
});

export default router;
