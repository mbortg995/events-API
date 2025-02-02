import { Router } from 'express';
import { ordersController } from './order.controller.js';

const router = Router({ mergeParams: true });

router.get('/', ordersController.index);
router.get('/:orderId', ordersController.getById);
router.post('/', ordersController.create);
router.put('/:orderId', ordersController.update);
router.delete('/:orderId', ordersController.delete);

export default router;
