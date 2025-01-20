import eventsService from './events.service.js';

export const eventsController = {
  index: async (req, res) => {
    try {
      const events = await eventsService.getAll(req.params.companyId);
      res.json(events);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const event = await eventsService.getById(req.params.eventId, req.params.companyId);
      res.json(event);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
};

export default eventsController;
