import ordersService from './order.service.js';

export const ordersController = {
  index: async (req, res) => {
    try {
      const orders = await ordersService.getAll(req.params.companyId, req.params.eventId);
      res.json(orders);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const order = await ordersService.getById(req.params.companyId, req.params.eventId, req.params.orderId);
      res.json(order);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const order = await ordersService.create(req.body, req.params.companyId, req.params.eventId);
      res.json(order);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const order = await ordersService.update(req.body, req.params.companyId, req.params.eventId, req.params.orderId);
      res.json(order);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      await ordersService.delete(req.params.companyId, req.params.eventId, req.params.orderId);
      res.json({ message: 'Order deleted successfully.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

export default ordersController;
