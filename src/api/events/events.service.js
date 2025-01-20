import eventsRepository from './events.repository.js';

const validateEventFields = (event) => {
  const requiredFields = ['id', 'name', 'description', 'starts_at', 'ends_at', 'company_id', 'booking_available', 'max_tickets_for_order', 'event_type', 'schedule', 'adress'];
  for (const field of requiredFields) {
    if (!event[field]) {
      throw new Error('Missing required field');
    }
  }
};

const eventsService = {
  getAll: async (companyId) => {
    const events = await eventsRepository.getAll(companyId);
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
};

export default eventsService;
