import { Router } from 'express';
import { eventsController } from './events.controller.js';

const router = Router({ mergeParams: true });

router.get('/', eventsController.index);
router.get('/:eventId', eventsController.getById);
router.post('/', eventsController.create);
router.put('/:eventId', eventsController.update);
router.delete('/:eventId', eventsController.delete);
export default router;
