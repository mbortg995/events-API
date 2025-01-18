import { Router } from 'express';
import authRoutes from './src/api/auth/auth.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Bienvenido a mi API');
});

router.use('/auth', authRoutes);

export default router;
