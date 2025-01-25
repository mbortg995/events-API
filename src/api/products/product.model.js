import { model, Schema } from 'mongoose';

const productsSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  event_id: { type: Schema.Types.ObjectId, ref: 'events', required: true },
  max_sales: { type: Number, required: true },
  sales: { type: Number, required: true },
}, { timestamps: true });

const productsModel = model('Products', productsSchema);
export default productsModel;
