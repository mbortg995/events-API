import { model, Schema } from 'mongoose';

const ordersSchema = new Schema({
  event_id: { type: Schema.Types.ObjectId, ref: 'events', required: true },
  total_price: { type: Number, required: false },
  total_items: { type: Number, required: false },
  status: { type: String, required: true },
}, { timestamps: true });

const ordersModel = model('Orders', ordersSchema);
export default ordersModel;
