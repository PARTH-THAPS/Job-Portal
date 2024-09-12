import Users from "../models/userModel.js";
export const  loginUser=(req,res)=>
{

const {email,password,}=req.body;
   console.log(req.body);

}

export const defaultRegister=(req,res)=>
{
   res.render("main-register-page");
}