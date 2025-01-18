import { Router } from "express";
import { eventController } from "./event.controller.js";

const router = Router();

router.get('/', eventController.index);
router.get('/:eventId', eventController.getById);

export default router;
