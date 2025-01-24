import productsModel from './product.model.js';

const productsRepository = {
  getAll: async () => {

  },
  getById: async () => {

  },
  create: async (product) => {
    const createdProduct = await productsModel.create(product);
    return createdProduct;
  },
};

export default productsRepository;
