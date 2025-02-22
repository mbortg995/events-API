import { Router } from 'express';
import { productsController } from './product.controller.js';

const router = Router({ mergeParams: true });

router.get('/', productsController.index);
router.get('/:productId', productsController.getById);
router.post('/', productsController.create);
router.put('/:productId', productsController.update);
router.delete('/:productId', productsController.delete);

export default router;
