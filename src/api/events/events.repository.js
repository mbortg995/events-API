import eventsModel from './events.model.js';

const eventsRepository = {
  getAll: async (companyId) => {
    const events = await eventsModel.find({ company_id: companyId }).lean();
    return events;
  },
  getById: async (eventId, companyId) => {
    const event = await eventsModel.findOne({ _id: eventId, company_id: companyId }).lean();
    return event;
  },
};

export default eventsRepository;
