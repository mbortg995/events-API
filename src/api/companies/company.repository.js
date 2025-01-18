import companyModel from './company.model.js';

const companyRepository = {
  create: async (companyData) => {
    const company = await companyModel.create(companyData);
    return company;
  },
};

export default companyRepository;
