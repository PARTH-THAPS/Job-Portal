import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { applyjob, getApplicants, getAppliedJobs, updateStatus } from "../Controller/application.controller.js";

const ApplicationRouter= express.Router();


ApplicationRouter.get('/apply/:id',isAuthenticated,applyjob);
ApplicationRouter.get('/get',isAuthenticated,getAppliedJobs);
ApplicationRouter.get('/:id/applicants',isAuthenticated,getApplicants);
ApplicationRouter.post('/status/:id/update',isAuthenticated,updateStatus);

export default ApplicationRouter;




