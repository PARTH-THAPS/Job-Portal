import { Company } from "../Models/company.model.js";

export const registerCompany=async(req,res)=>{
    try{
const {companyName}=req.body;

if(!companyName){
return res.status(400).json({message:"Company name is required",success:true});

}
let comapany= await Company.findOne({name:companyName});

if(comapany){
return res.status(403).json({message:"you can not register same company",success:false});
}

await Company.create({name:companyName,userId:req.id})

return res.status(201).json({message:"Company Registered",comapany,success:true})

    }
    catch(error){
        console.log(error)
    }

}

export const getCompany= async (req,res)=>{
try {
const userID= req.id;

const companies=await Company.find({ userId: userID },{name:1,createdAt:1,_id:0});

console.log(companies);

if(!companies)
{
return res.status(404).json({message:"company not found"});
}

return res.status(200).json({companies,success:true});
}

catch(err)
{
console.log(err);
}

}




export const getCompanyById= async (req,res)=>{
    try {
    const CompanyID= req.params.id;
    const companies=await Company.findById(CompanyID);
    
    if(!companies)
    {
    return res.status(404).json({message:"company not found"});
    
    }
    return res.status(200).json({companies,success:true});
    }
    
    catch(err)
    {
    console.log(err);
    }
    }

    export const updateCompany= async(req,res)=>{

        try{
              const {name,description,website,location}= req.body;
              const file= req.file;

              const updateData={name,description,website,location};

              const comapany= await Company.findByIdAndUpdate(req.params.id,updateData,{new:true});


              if(!comapany){ return res.status(404).json({message:"company not found",success:false});}

        }
        catch(err){
            console.log(err);
        }

    }