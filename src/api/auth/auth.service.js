import { compareSync, hashSync } from 'bcrypt';
import userRepository from '../src/api/users/user.repository.js';
import jwt from 'jsonwebtoken';
import keys from '../constants.config.js';

const generateToken = (email) => {
  const token = jwt.sign({ email }, keys.JWT_PRIVATE_KEY);
  return token;
};

const validateUserFields = (userData) => {
  const requiredFields = ['email', 'password', 'username'];

  for (const field of requiredFields) {
    if (!userData[field]) {
      throw new Error('Debes completar todos los campos');
    }
  }
};

const authService = {
  register: async (userData) => {

  },
  login: async (userData) => {

  },
};


export default authService