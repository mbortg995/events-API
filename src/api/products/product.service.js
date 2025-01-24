import productsRepository from './product.repository.js';

// Validate fields function pendiente

const productsService = {
  getAll: async () => {

  },
  getById: async () => {

  },
  create: async (product, companyId, eventId) => {
    // faltará validateFields
    // comprobar que el company_id que nos viene por parámetro coincide con el company_id que está en el evento.

    const createdProduct = await productsRepository.create({ ...product, event_id: eventId });
    if (!createdProduct) {
      throw new Error('Event not created');
    }
    return createdProduct;
  },

};

export default productsService;
