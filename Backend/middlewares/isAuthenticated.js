import jwt from "jsonwebtoken";

const isAuthenticated=async(req,res,next)=>{
try{
const token= req.cookies.token;
console.log(token);

if(!token){
return res.status(401).json({message:"User not Authenticateted",success:false});
}
const decode=await jwt.verify(token,process.env.SECRET_KEY);

if(!decode){
    return res.status(401).json({message:"Invalid Token",success:false});
}

req.id=decode.userId;
next();

}
catch(err)
{

}
}

export default isAuthenticated;