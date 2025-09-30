import { Router } from 'express';
import { ShoppingCartController } from '../controllers/shoppingCart/ShoppingCartController';
import { requireAuth } from '@clerk/express';
import 'dotenv/config';

const router = Router();
const shoppingCartController = new ShoppingCartController();


router.get('/shopping_carts/me', requireAuth({ publishableKey: process.env.CLERK_PUBLISHABLE_KEY }), (req, res) => shoppingCartController.getMyCart(req, res));

router.post('/shopping_carts/items', (req, res) => shoppingCartController.addItem(req, res));

router.patch('/shopping_carts/items/:itemId', (req, res) => shoppingCartController.updateItemQuantity(req, res));

router.delete('/shopping_carts/items/:itemId', (req, res) => shoppingCartController.removeItem(req, res));

router.post('/shopping_carts/items/no-auth', (req, res) => shoppingCartController.addItemNoAuth(req, res));

router.patch('/shopping_carts/:shopping_cart_id', requireAuth({ publishableKey: process.env.CLERK_PUBLISHABLE_KEY }), (req, res) => shoppingCartController.updateStatus(req, res));

router.post('/shopping_carts', requireAuth({ publishableKey: process.env.CLERK_PUBLISHABLE_KEY }), (req, res) => shoppingCartController.createShoppingCart(req, res));

export default router;