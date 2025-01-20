import { model, Schema } from 'mongoose';

const eventsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  start_at: { type: Date, required: true },
  ends_at: { type: Date, required: true },
  company_id: { type: Schema.Types.ObjectId, ref: 'company', required: true },
  booking_available: { type: Boolean, required: true },
  max_tickets_for_order: { type: Number, required: true },
  event_type: { type: String, required: false },
  schedule: { type: String, required: false },
  address: { type: String, required: true },
  slug: { type: String, required: false },
}, { timestamps: true });

const eventsModel = model('Event', eventsSchema);
export default eventsModel;
