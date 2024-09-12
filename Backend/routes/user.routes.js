import express from 'express';
import { logout,login,register,updateProfile } from '../Controller/user.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';

const userRouter= express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login);
userRouter.post('/profile/update',isAuthenticated,updateProfile);
userRouter.get("/logout",logout);


export default userRouter;