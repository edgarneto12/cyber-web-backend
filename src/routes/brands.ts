import { Router } from 'express';
import { prisma } from '../config/prisma';

const brandsRouter = Router();

// GET /api/brands - lista marcas e total de produtos por marca
brandsRouter.get('/', async (req, res) => {
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

export default brandsRouter;
