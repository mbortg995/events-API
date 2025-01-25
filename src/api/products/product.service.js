import productsRepository from './product.repository.js';

// Validate fields function pendiente
const validateProductFields = (product) => {
  const requiredFields = ['name', 'description', 'price', 'max_sales'];

  for (const field of requiredFields) {
    if (!product[field]) {
      throw new Error('Missing required field');
    }
  }
};

const productsService = {
  getAll: async (companyId, eventId) => {
    const products = await productsRepository.getAll(companyId, eventId);
    if (!products) {
      throw new Error('Products not found');
    }
    return products;
  },
  getById: async (companyId, eventId, productId) => {
    const product = await productsRepository.getById(companyId, eventId, productId);
    if (!product) {
      throw new Error('Product not found');
    }
    return product;
  },
  create: async (product, companyId, eventId) => {
    // comprobar que el company_id que nos viene por parámetro coincide con el company_id que está en el evento.
    validateProductFields(product);
    const createdProduct = await productsRepository.create({ ...product, event_id: eventId, sales: 0 });
    if (!createdProduct) {
      throw new Error('Event not created');
    }
    return createdProduct;
  },
  update: async (product, companyId, eventId, productId) => {
    validateProductFields(product);
    const updatedProduct = await productsRepository.update(product, companyId, eventId, productId);
    if (!updatedProduct) {
      throw new Error('Product not updated');
    }
    return updatedProduct;
  },
  delete: async (companyId, eventId, productId) => {
    const deletedProduct = await productsRepository.delete(companyId, eventId, productId);
    if (!deletedProduct) {
      throw new Error('Product not deleted');
    }
  },

};

export default productsService;
