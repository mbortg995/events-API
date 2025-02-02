import ordersModel from './order.model.js';

const ordersRepository = {
  getAll: async () => {
    const orders = await ordersModel.find().lean();
    return orders;
  },
  getById: async (orderId) => {
    const order = await ordersModel.findById(orderId).lean();
    return order;
  },
  create: async (order) => {
    const createdOrder = await ordersModel.create(order);
    return createdOrder;
  },
  update: async (order, orderId) => {
    const updatedOrder = await ordersModel.findByIdAndUpdate(orderId, order);
    return updatedOrder;
  },
  delete: async (orderId) => {
    const deletedOrder = await ordersModel.findByIdAndDelete(orderId);
    return deletedOrder;
  },
};

export default ordersRepository;
