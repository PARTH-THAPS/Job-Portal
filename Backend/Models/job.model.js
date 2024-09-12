import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: Array
  },
  salary: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  experienceLevel: {
    type: Number
  },
  companyId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'applications'
    }
  ]
});

export const Job = mongoose.model("Job", jobSchema);
  