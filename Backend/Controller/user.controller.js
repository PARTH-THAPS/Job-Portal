import {User} from "../Models/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import getDataUri from "../Config/dataUri.js";
import cloudinary from "../Config/cloudinary.js";


export const register= async (req,res)=>{
try{
    const {fullName,email,phoneNumber,password,role}= req.body;
  

if(!fullName||!email||!phoneNumber||!password||!role){
    return res.status(400).json({message:"Something is missing",success:false});
}

const file =req.file;
const fileUri=getDataUri(file);
const cloudResponse= await cloudinary.uploader.upload(fileUri.content,{
    resource_type: "raw" 
});
console.log(cloudResponse);

const user= await User.findOne({email});

if(user){

    return res.status(400).json({message:"User Alreday Exist with this Email",success:false});
}
const hassedPassword= await bcrypt.hash(password,10)

await User.create({fullName,email,phoneNumber,password:hassedPassword,role,profile:{profilePhoto:cloudResponse.secure_url}});
return res.status(201).json({message:"Account Created Successfully",success:true});



}
catch(err){
    console.log(err);
}
}

export const login= async(req,res)=>{
try{

const {email,password,role}= req.body;
if(!email||!password||!role){
    return res.status(400).json({message:"Something is missing",success:false});
}

let user= await User.findOne({email});

if(!user)
{
    return res.status(400).json({message:"Incorrect password or email",success:false});
}

const isPasswordMatch= await bcrypt.compare(password,user.password);
if(!isPasswordMatch)
    {
             return res.status(400).json({message:"incorrect email or password",success:false});
    }
if(role!=user.role)
    {

        return res.status(400).json({message:"Account does not exist with current role",success:false});
    }

    const tokenData={
        userId:user._id
    }
 
    const token= await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

user={
    _id:user._id,
    fullName:user.fullName,
    email:user.email,
    phoneNumber:user.phoneNumber,
    role:user.role,
    profile:user.profile
}
return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpsOnly:true,sameSite:'strict'}).json({message:"Welcome Back",success:true,user});
}
catch(err)
{
   console.log(err);  
}
}
export const logout= async(req,res)=>{
try{
return res.status(200).cookie("token","",{maxAge:0}).json({message:"Logged out Succesfully",success:true});
}
catch(err)
{
console.log(err);
}
}


export const updateProfile= async(req,res)=>{
try{
    const {fullName,email,phoneNumber,bio,skills}=req.body;
    console.log(fullName,email,phoneNumber,bio,skills);

    const file= req.file;
    //cloudinary
    const fileUri=getDataUri(file);
    const cloudResponse= await cloudinary.uploader.upload(fileUri.content,{
        resource_type: "raw" 
    });


let skillsArray;
if(skills){
     skillsArray=skills;
}
    const userId=req.id;
    let user=await User.findById(userId);

    if(!user)
        {
            return res.status(400).json({message:"USER NOT FOUND",success:false});
        }


if(fullName){
        user.fullName=fullName;
}
if(email){
        user.email=email;
}
if(phoneNumber){
        user.phoneNumber=phoneNumber;
}
if(bio){
        user.profile.bio=bio;
}
if(skills){
        user.profile.skills=skillsArray;
}
//resume ....

 if(cloudResponse)
    {
        user.profile.resume=cloudResponse.secure_url;
        user.profile.resumeOriginalName= file.originalname;
    }

        await user.save();
        res.status(201).json({message:"Account Updated Successfully",user,success:true});

}
catch(err)
{
console.log(err);
}

}