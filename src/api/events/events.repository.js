import eventsModel from './events.model.js';

const eventsRepository = {
  getAll: async (companyId, query) => {
    const filter = { company_id: companyId };
    if (query.booking) {
      if (query.booking === 'open') {
        filter.booking_available = true;
      } else if (query.booking === 'closed') {
        filter.booking_available = false;
      }
    }
    if (query.start_at) {
      filter.start_at = { $gte: query.start_at };
    }
    const events = await eventsModel.find(filter).lean();
    return events;
  },
  getById: async (eventId, companyId) => {
    const event = await eventsModel.findOne({ _id: eventId, company_id: companyId }).lean();
    return event;
  },
  create: async (event) => {
    const createdEvent = await eventsModel.create(event);
    return createdEvent;
  },
  update: async (event, eventId, companyId) => {
    const updatedEvent = await eventsModel.findOneAndUpdate({ _id: eventId, company_id: companyId }, event);
    return updatedEvent;
  },
  delete: async (eventId, companyId) => {
    const deletedEvent = await eventsModel.findOneAndDelete({ _id: eventId, company_id: companyId });
    return deletedEvent;
  },
};

export default eventsRepository;
