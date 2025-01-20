import { Router } from 'express';
import { eventsController } from './events.controller.js';

const router = Router();

router.get('/', eventsController.index);
router.get('/:eventId', eventsController.getById);

export default router;
