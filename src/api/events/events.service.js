import eventsRepository from './events.repository.js';

const validateEventFields = (event) => {
  const requiredFields = ['name', 'description', 'start_at', 'ends_at', 'booking_available', 'max_tickets_for_order', 'address'];

  for (const field of requiredFields) {
    if (!event[field]) {
      throw new Error('Missing required field');
    }
  }
};

const eventsService = {
  getAll: async (companyId, query) => {
    const events = await eventsRepository.getAll(companyId, query);
    if (!events) {
      throw new Error('Events not found');
    }
    return events;
  },
  getById: async (eventId, companyId) => {
    const event = await eventsRepository.getById(eventId, companyId);

    if (!event) {
      throw new Error('Event not found');
    }
    return event;
  },
  create: async (event, companyId) => {
    validateEventFields(event);
    const createdEvent = await eventsRepository.create({ ...event, company_id: companyId });
    if (!createdEvent) {
      throw new Error('Event not created');
    }
    return createdEvent;
  },
  update: async (event, eventId, companyId) => {
    validateEventFields(event);
    const updatedEvent = await eventsRepository.update(event, eventId, companyId);
    if (!updatedEvent) {
      throw new Error('Event not updated');
    }
    return updatedEvent;
  },
  delete: async (eventId, companyId) => {
    const deletedEvent = await eventsRepository.delete(eventId, companyId);
    if (!deletedEvent) {
      throw new Error('Event not deleted');
    }
    return deletedEvent;
  },
};

export default eventsService;
