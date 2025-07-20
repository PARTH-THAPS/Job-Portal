import { Job } from "../Models/job.model.js";

//
export const postJob = async (req, res) => {
  try {
    const {
      title,
      description,
      requirements,
      salary,
      location,
      jobType,
      experience, // corrected
      position,
      companyId,
    } = req.body;

    const userId = req.id; // Ensure this comes from auth middleware

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experience ||
      !position ||
      !companyId
    ) {
      return res
        .status(400)
        .json({ message: "Something is missing", success: false }); // fixed spelling
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(",").map((req) => req.trim()), // cleaner list
      experienceLevel: experience,
      salary: Number(salary),
      location,
      jobType,
      position,
      companyId,
      createdBy: userId,
    });

    return res
      .status(201)
      .json({ message: "New job created successfully", job, success: true }); // fixed spelling
  } catch (err) {
    console.error("Error creating job:", err);
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";

    const query = {
      $or: [
        { title: { $regex: keyword, $options: "i" } },
        { descriptions: { $regex: keyword, $options: "i" } },
      ],
    };
    const jobs = await Job.find(query)
      .populate({ path: "companyId" })
      .sort({ createdAt: -1 });

    if (!jobs) {
      return res.status(404).json({ message: "not found", success: false });
    }

    return res
      .status(200)
      .json({ message: "Company Found", jobs, success: true });
  } catch (error) {
    console.log(error);
  }
  console.log("data");
};

///Students
export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate({ path: "applications" });

    if (!job) {
      return res.status(404).json({ message: "not found", success: false });
    }

    return res
      .status(200)
      .json({ message: "Company Found", job, success: true });
  } catch (error) {
    console.log(error);
  }
};

//Admin
export const getAdminJobs = async (req, res) => {
  try {
    const adminId = req.id;
    const jobs = await Job.find({ createdBy: adminId }).populate({
      path: "companyId",
      createdAt: -1,
    });

    if (!jobs || jobs.length === 0) {
      return res.status(404).json({ message: "No jobs found", success: false });
    }

    return res.status(200).json({
      message: "Jobs retrieved successfully",
      jobs,
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
      success: false,
    });
  }
};
