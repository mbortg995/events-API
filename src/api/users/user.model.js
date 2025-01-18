import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  company_id: {
    type: Schema.Types.ObjectId,
    ref: 'company',
    required: true,
  },
}, {
  timestamps: true,
});

const userModel = model('User', userSchema);

export default userModel;
