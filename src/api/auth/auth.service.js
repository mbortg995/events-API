import { compareSync, hashSync } from 'bcrypt';
import userRepository from '../users/user.repository.js';
import companyRepository from '../companies/company.repository.js';
import jwt from 'jsonwebtoken';
import keys from '../../../constants.configs.js';

const generateToken = (email) => {
  const token = jwt.sign({ email }, keys.JWT_PRIVATE_KEY);
  return token;
};

const validateUserFields = (userData) => {
  const requiredFields = ['email', 'password', 'name'];

  for (const field of requiredFields) {
    if (!userData[field]) {
      throw new Error('Debes completar todos los campos');
    }
  }
};

const authService = {
  register: async (userData) => {
    try {
      validateUserFields(userData);
      const hashedPassword = hashSync(userData.password, 10);
      userData.password = hashedPassword;
      const company = await companyRepository.create(userData.company);
      const user = await userRepository.create({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        company_id: company._id,
      });
      const token = generateToken(user.email);
      return {
        user: {
          name: user.name,
          email: user.email,
          password: user.password,
          company: company,
        },
        token,
      };
    } catch (error) {
      if (error.code === 11000) {
        throw new Error('Email y/o usuario ya registrado.');
      }
    }
  },
  login: async (userData) => {

  },
};

export default authService;