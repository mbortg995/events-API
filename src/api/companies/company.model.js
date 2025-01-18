import { model, Schema } from 'mongoose';

const companySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  cif: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: false,
    unique: true,
  },
}, {
  timestamps: true,
});

const companyModel = model('Company', companySchema);

export default companyModel;
