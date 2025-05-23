import { Application } from "../Models/application.model.js";
import { Job } from "../Models/job.model.js";

export  const applyjob=async (req,res)=>{

    try{
const userId= req.id;
const jobId= req.params.id;

  if(!jobId){
return res.status(400).json({message:"JOB ID IS REQUIRED",success:false});
  }
const existingApplication= await Application.findOne({job:jobId,applicant:userId});

   if(existingApplication)
    {
        return res.status(400).json({message:"You Have Applied for this Job Already",success:false});
    }
    const job= await Job.findById(jobId);
    if(!job){
        return res.status(404).json({message:"Job Not Found",success:false})
    } 
     const newApplication= await Application.create({job:jobId,applicant:userId});
     job.applications.push(newApplication._id);
     await job.save();
     return res.status(201).json({message:"Job applied Sucessfully",success:true});
    }
    catch(err)
    {
         console.log(err);
    }  
}


export const getAppliedJobs= async(req,res)=>{

try{
const userId= req.id;
const application= await Application.find({applicant:userId}).sort({createdAt:-1}).populate({path:'job',options:{sort:{createdAt:-1}},populate:{path:'companyId'}});
if(!application)
    {
           return res.status().json({message:"No Application",success:false});
    }
return res.status(200).json({application,success:true});


}
catch(err)
{
    console.log(err);
}

}

export const getApplicants=async(req,res)=>{
try{
const jobId= req.params.id;
const job= await Job.findById(jobId).populate({path:'applications',options:{sort:{createdAt:-1}},populate:{path:'applicant'}});

if(!job)
    {
         return res.status(404).json({
         message:'Job not found',
         success:false
         });
    }

    return res.status(404).json({
        job,
        success:true
        });

}
catch(err)
{
console.log(err)
}
}

export const updateStatus= async(req,res)=>{

const status= req.body;
const appliationId= req.params.id;
if(!status)
{
return res.status(400).json({message:'status is required',success:false});
}
const application= await Application.findOne({_id:appliationId});

if(!application)
    {
        return res.status(404).json({message:'Application Not Found',success:false});

    }
application.status= status.toLowerCase();
await application.save();

return res.status(200).json({message:'Status Updated Successfully',success:true});

}