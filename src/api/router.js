import { Router } from 'express';
import authRoutes from './auth/auth.router.js';
import eventRoutes from './event/event.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

router.use('/auth', authRoutes);
router.use('/company/:companyId/events', eventRoutes);

export default router;
