import { prisma } from '../../config/prisma';

interface ProductItem {
  product_id: number;
  quantity: number;
  color?: string;
  memory?: string;
}

interface CreateShoppingCartInput {
  userId: string;
  products: ProductItem[];
}

export class ShoppingCartService {
  async addItem({ userId, productId, quantity, color, memory }: { userId: string, productId: number, quantity: number, color?: string, memory?: string }) {
    let cart = await prisma.shoppingCart.findFirst({
      where: { user_id: userId, status: 'ativo' },
    });
    if (!cart) {
      cart = await prisma.shoppingCart.create({
        data: { user_id: userId, status: 'ativo' },
      });
    }
    let item = await prisma.itemsShoppingCart.findFirst({
      where: {
        shopping_cart_id: cart.id,
        product_id: productId,
        color,
        memory,
      },
    });
    if (item) {
      item = await prisma.itemsShoppingCart.update({
        where: { id: item.id },
        data: { quantity: item.quantity + quantity },
      });
    } else {
      item = await prisma.itemsShoppingCart.create({
        data: {
          shopping_cart_id: cart.id,
          product_id: productId,
          quantity,
          color,
          memory,
        },
      });
    }
    return item;
  }
  async getCartByUserId(userId: string) {
    const cart = await prisma.shoppingCart.findFirst({
      where: { user_id: userId, status: 'ativo' },
      include: {
        items: {
          include: {
            product: true,
          },
        },
      },
    });
    console.log('getCartByUserId - Carrinho retornado do banco:', cart);
    if (!cart) return { items: [], subtotal: 0, total: 0 };
    const items = cart.items.map((item: any) => ({
      id: item.id,
      product_id: item.product_id,
      quantity: item.quantity,
      color: item.color,
      memory: item.memory,
      product: item.product,
      subtotal: item.product.price * item.quantity,
    }));
    console.log('getCartByUserId - Itens do carrinho:', items);
    const subtotal = items.reduce((acc, item) => acc + item.subtotal, 0);
    const estimatedTax = 50;
    const shipping = 29; 
    const total = subtotal + estimatedTax + shipping;
    return { items, subtotal, estimatedTax, shipping, total };
  }

  async updateItemQuantity({ itemId, userId, quantity }: { itemId: number, userId: string, quantity: number }) {
    const item = await prisma.itemsShoppingCart.findFirst({
      where: {
        id: itemId,
        shoppingCart: { user_id: userId, status: 'ativo' },
      },
    });
    if (!item) throw new Error('Item not found');
    const updated = await prisma.itemsShoppingCart.update({
      where: { id: itemId },
      data: { quantity },
    });
    return updated;
  }

  async removeItem({ itemId, userId }: { itemId: number, userId: string }) {
    const item = await prisma.itemsShoppingCart.findFirst({
      where: {
        id: itemId,
        shoppingCart: { user_id: userId, status: 'ativo' },
      },
    });
    if (!item) throw new Error('Item not found');
    await prisma.itemsShoppingCart.delete({ where: { id: itemId } });
  }
  async createShoppingCartWithItems({ userId, products }: CreateShoppingCartInput) {
    const result = await prisma.$transaction(async (tx) => {
      const shoppingCart = await tx.shoppingCart.create({
        data: {
          user_id: userId,
          status: 'ativo',
        },
      });

      for (const item of products) {
        await tx.itemsShoppingCart.create({
          data: {
            shopping_cart_id: shoppingCart.id,
            product_id: item.product_id,
            quantity: item.quantity,
            color: item.color,
            memory: item.memory,
          },
        });
      }

      return { shoppingCartId: shoppingCart.id };
    });

    return result;
  }

  async updateStatus({ shoppingCartId, userId, newStatus }: { shoppingCartId: number, userId: string, newStatus: string }) {
    const cart = await prisma.shoppingCart.findFirst({
      where: {
        id: shoppingCartId,
        user_id: userId,
      },
    });
    if (!cart) {
      throw new Error('Cart not found');
    }

    if (!['ativo', 'finalizado'].includes(newStatus)) {
      throw new Error('Invalid status');
    }

    const updated = await prisma.shoppingCart.update({
      where: { id: shoppingCartId },
      data: { status: newStatus },
    });

    return updated.status;
  }
}
