import productsModel from './product.model.js';

const productsRepository = {
  getAll: async (companyId, eventId) => {
    const filter = { company_id: companyId, event_id: eventId };
    const products = await productsModel.find(filter).lean();
    return products;
  },
  getById: async (companyId, eventId, productId) => {
    const filter = { company_id: companyId, event_id: eventId, _id: productId };
    const product = await productsModel.findOne(filter).lean();
    return product;
  },
  create: async (product) => {
    const createdProduct = await productsModel.create(product);
    return createdProduct;
  },
  update: async (product, companyId, eventId, productId) => {
    const filter = { company_id: companyId, event_id: eventId, _id: productId };
    const updatedProduct = await productsModel.findOneAndUpdate(filter, product);
    return updatedProduct;
  },
  delete: async (companyId, eventId, productId) => {
    const filter = { company_id: companyId, event_id: eventId, _id: productId };
    const deletedProduct = await productsModel.findOneAndDelete(filter);
    return deletedProduct;
  },
};

export default productsRepository;
