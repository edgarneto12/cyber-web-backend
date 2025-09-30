import { Request, Response } from 'express';
import { getAuth } from '@clerk/express';
import { ShoppingCartService } from '../../services/shoppingCart/ShoppingCartService';

const shoppingCartService = new ShoppingCartService();

export class ShoppingCartController {
  async addItem(req: Request, res: Response) {
    try {
  const userId = getAuth(req).userId;
      const { productId, quantity = 1, color, memory } = req.body;
      console.log('addItem - Dados recebidos:', { productId, quantity, color, memory });
      if (!productId || typeof productId !== 'number' || quantity < 1) {
        return res.status(400).json({ error: 'Invalid product or quantity' });
      }
      if (!userId) {
        return res.status(200).json({ message: 'Item added locally (guest)', productId, quantity, color, memory });
      }
      const item = await shoppingCartService.addItem({
        userId,
        productId: Number(productId),
        quantity: Number(quantity),
        color,
        memory,
      });
      return res.status(200).json({ message: 'Item added to cart', item });
    } catch (error: any) {
      return res.status(400).json({ error: error.message || 'Error adding item to cart' });
    }
  }
  async getMyCart(req: Request, res: Response) {
    try {
      console.log('getMyCart - chamado');
      const authData = getAuth(req);
      console.log('getMyCart - getAuth:', authData);
      const userId = authData.userId;
      if (!userId) {
        console.log('getMyCart - guest, retorna vazio');
        return res.status(200).json({ items: [], subtotal: 0, estimatedTax: 0, shipping: 0, total: 0 });
      }
      const cart = await shoppingCartService.getCartByUserId(userId);
      console.log('getMyCart - carrinho retornado:', cart);
      return res.status(200).json(cart);
    } catch (error) {
      console.error('Error in getMyCart:', error);
      return res.status(500).json({ error: 'Error fetching cart' });
    }
  }

  async updateItemQuantity(req: Request, res: Response) {
    try {
      const userId = getAuth(req).userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { itemId } = req.params;
      const { quantity } = req.body;
      if (typeof quantity !== 'number' || quantity < 1) {
        return res.status(400).json({ error: 'Invalid quantity' });
      }
  const updated = await shoppingCartService.updateItemQuantity({ itemId: Number(itemId), userId, quantity });
      return res.status(200).json({ message: 'Quantity updated successfully', item: updated });
    } catch (error: any) {
      return res.status(400).json({ error: error.message || 'Error updating quantity' });
    }
  }

  async removeItem(req: Request, res: Response) {
    try {
      const userId = getAuth(req).userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      const { itemId } = req.params;
  await shoppingCartService.removeItem({ itemId: Number(itemId), userId });
      return res.status(200).json({ message: 'Item removed from cart' });
    } catch (error: any) {
      return res.status(400).json({ error: error.message || 'Error removing item' });
    }
  }

  async addItemNoAuth(req: Request, res: Response) {
    try {
      const { product_id, quantity } = req.body;
      if (!product_id || typeof quantity !== 'number' || quantity < 1) {
        return res.status(400).json({ error: 'Dados inválidos' });
      }
      return res.status(200).json({ message: 'Item added locally', product_id, quantity });
    } catch (error) {
      return res.status(400).json({ error: 'Error adding item locally' });
    }
  }
  async createShoppingCart(req: Request, res: Response) {
    try {
  const userId = getAuth(req).userId;
  console.log('createShoppingCart - userId:', userId);
      console.log('createShoppingCart - Authorization header:', req.headers.authorization);
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { products } = req.body;
      console.log('createShoppingCart - products:', products);
      if (!Array.isArray(products) || products.length === 0) {
        return res.status(400).json({ error: 'Products array is required' });
      }

      const result = await shoppingCartService.createShoppingCartWithItems({
        userId,
        products,
      });

      return res.status(200).json({
        message: 'Cart created successfully',
        status_code: 200,
        shopping_cart_id: result.shoppingCartId,
      });
    } catch (error) {
      console.error('Error in createShoppingCart:', error);
      return res.status(500).json({
        error: 'Internal server error',
        message: 'Failed to create shopping cart',
      });
    }
  }

  async updateStatus(req: Request, res: Response) {
    try {
      const userId = getAuth(req).userId;
      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }

      const { shopping_cart_id } = req.params;
      const { status } = req.body;
      if (!status) {
        return res.status(400).json({ error: 'Status is required' });
      }

      const newStatus = await shoppingCartService.updateStatus({
        shoppingCartId: Number(shopping_cart_id),
        userId,
        newStatus: status,
      });

      return res.status(200).json({
        message: 'Status updated successfully',
        status_code: 200,
        new_status: newStatus,
      });
    } catch (error: any) {
      console.error('Error in updateStatus:', error);
      return res.status(400).json({
        error: error.message || 'Error updating status',
      });
    }
  }
}
