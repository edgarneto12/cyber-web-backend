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

export default router;
