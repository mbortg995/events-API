import productsService from './product.service.js';

export const productsController = {
  index: async (req, res) => {

  },
  getById: async (req, res) => {

  },

  create: async (req, res) => {
    try {
      const product = await productsService.create(req.body, req.params.companyId, req.params.eventId);
      res.json(product);
    } catch (error) {
      res.status(422).json({ error: error.message });
    }
  },
};

export default productsController;
