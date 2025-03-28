import express from 'express';
import { logout,login,register,updateProfile } from '../Controller/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
import { singleUpload } from '../middlewares/multer.js';

const userRouter= express.Router();

userRouter.post('/register',singleUpload,register);
userRouter.post('/login',login);
userRouter.post('/profile/update',isAuthenticated,singleUpload,updateProfile);
userRouter.get("/logout",logout);


export default userRouter;