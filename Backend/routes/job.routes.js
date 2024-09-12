import express from 'express';

import isAuthenticated from '../middlewares/isAuthenticated.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../Controller/job.controller.js';

const JobRouter= express.Router();

JobRouter.post('/post',isAuthenticated,postJob);
JobRouter.get('/get',isAuthenticated,getAllJobs);
JobRouter.get('/getadminjobs',isAuthenticated,getAdminJobs);
JobRouter.get("/get/:id",isAuthenticated,getJobById);


export default JobRouter;