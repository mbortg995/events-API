import companyModel from './company.model.js';

const companyRepository = {
  create: async (companyData) => {
    const company = await companyModel.create(companyData);
    return company;
  },
  getById: async (id) => {
    const company = await companyModel.findById(id);
    return company;
  },
};

export default companyRepository;
