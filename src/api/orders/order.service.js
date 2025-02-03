import ordersRepository from './order.repository.js';

const validateOrderFields = (order) => {
  const requiredFields = ['name', 'price', 'product_id'];
  for (const field of requiredFields) {
    if (!order[field]) {
      throw new Error('Missing required field');
    }
  }
};

const ordersService = {
  getAll: async (companyId, eventId) => {
    const orders = await ordersRepository.getAll(companyId, eventId);
    if (!orders) {
      throw new Error('Orders not found');
    }
    return orders;
  },
  getById: async (companyId, eventId, orderId) => {
    const order = await ordersRepository.getById(companyId, eventId, orderId);
    if (!order) {
      throw new Error('Order not found');
    }
    return order;
  },
  create: async (order, companyId, eventId) => {
    validateOrderFields(order);
    // crear la order con status 'pending'. El total_price se calcula en base a la cantidad de productos y el precio del producto.
    // Habrá que sumar en product la cantidad de productos vendidos.
    // Tras crear order en pending, se tiene que crear una order_items por cada producto en la order.
    const createdOrder = await ordersRepository.create({ total_items: order[items].length, event_id: eventId, status: 'pending', total_price: null });
    if (!createdOrder) {
      throw new Error('Order not created');
    }
    return createdOrder;
  },
  update: async (order, companyId, eventId, orderId) => {
    validateOrderFields(order);
    const updatedOrder = await ordersRepository.update(order, companyId, eventId, orderId);
    if (!updatedOrder) {
      throw new Error('Order not updated');
    }
    return updatedOrder;
  },
  delete: async (companyId, eventId, orderId) => {
    const deletedOrder = await ordersRepository.delete(companyId, eventId, orderId);
    if (!deletedOrder) {
      throw new Error('Order not deleted');
    }
  },
};

export default ordersService;
