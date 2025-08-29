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

// GET /api/brands - lista marcas e total de produtos por marca
router.get('/brands', async (req, res) => {
  try {
    const brands = await prisma.product.groupBy({
      by: ['brand'],
      _count: { brand: true },
    });
    // Formata resposta conforme exemplo
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

export default router;
