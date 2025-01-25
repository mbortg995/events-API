import productsService from './product.service.js';

export const productsController = {
  index: async (req, res) => {
    try {
      const products = await productsService.getAll(req.params.companyId, req.params.eventId);
      res.json(products);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  getById: async (req, res) => {
    try {
      const product = await productsService.getById(req.params.companyId, req.params.eventId, req.params.productId);
      res.json(product);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  create: async (req, res) => {
    try {
      const product = await productsService.create(req.body, req.params.companyId, req.params.eventId);
      res.json(product);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
  update: async (req, res) => {
    try {
      const product = await productsService.update(req.body, req.params.companyId, req.params.eventId, req.params.productId);
      res.json(product);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
  delete: async (req, res) => {
    try {
      await productsService.delete(req.params.companyId, req.params.eventId, req.params.productId);
      res.json({ message: 'Product deleted successfully.' });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  },
};

export default productsController;
