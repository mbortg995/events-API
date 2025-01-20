import eventsService from './events.service.js';

export const eventsController = {
  index: async (req, res) => {
    try {
      const events = await eventsService.getAll(req.params.companyId, req.query);
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
  create: async (req, res) => {
    try {
      const event = await eventsService.create(req.body, req.params.companyId);
      res.json(event);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const event = await eventsService.update(req.body, req.params.eventId, req.params.companyId);
      res.json(event);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      await eventsService.delete(req.params.eventId, req.params.companyId);
      res.json({ message: 'Event deleted successfully.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

export default eventsController;
