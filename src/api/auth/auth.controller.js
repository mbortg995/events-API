import authService from './auth.service.js';

export const authController = {
  register: async (req, res) => {
    try {
      const user = await authService.register(req.body);
      res.json(user);
    } catch (error) {
      if (error.message === 'Email y/o usuario ya registrado.') {
        return res.status(409).json({ error: error.message });
      }
      return res.status(422).json({ error: error.message });
    }
  },
  login: async (req, res) => {

  },
};
