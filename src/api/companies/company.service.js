import companiesRepository from './company.repository.js';

const validateCompanyFields = (companyData) => {
  const requiredFields = ['name', 'description', 'cif'];

  for (const field of requiredFields) {
    if (!userData[field]) {
      throw new Error('Debes completar todos los campos');
    }
  }
};

const companyService = {
  create: async (companyData) => {
    try {
      validateCompanyFields(companyData);
      const company = await companiesRepository.create(companyData);
      return company;
    } catch (error) {
      throw new Error(error);
    }
  },
};
