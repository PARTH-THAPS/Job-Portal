import express from 'express';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../Controller/company.controller.js';

const CompanyRouter= express.Router();

CompanyRouter.post('/register',isAuthenticated,registerCompany);
CompanyRouter.get('/get',isAuthenticated,getCompany);
CompanyRouter.post('/get/:id',isAuthenticated,getCompanyById);
CompanyRouter.put("/update/:id",isAuthenticated,updateCompany);


export default CompanyRouter;