import { Router } from 'express';
import authRoutes from './auth/auth.router.js';
import eventRoutes from './events/events.router.js';
import productRoutes from './products/product.router.js';
import orderRoutes from './orders/order.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

router.use('/auth', authRoutes);
router.use('/company/:companyId/events', eventRoutes);
router.use('/company/:companyId/events/:eventId/products', productRoutes);
router.use('/company/:id/events/:eventId/orderrs', orderRoutes);

export default router;
