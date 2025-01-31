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
      experince,
      position,
      companyId,
    } = req.body;
    const userId = req.id;
    console.log(req.body);

    if (
      !title ||
      !description ||
      !requirements ||
      !salary ||
      !location ||
      !jobType ||
      !experince ||
      !position ||
      !companyId
    ) {
      return res
        .status(400)
        .json({ message: "Something is missing", sucess: false });
    }

    const job = await Job.create({
      title,
      description,
      requirements: requirements.split(","),
      experinceLevel: experince,
      salary: Number(salary),
      location,
      jobType,
      position,
      companyId: companyId,
      createdBy: userId,
    });
    return res
      .status(201)
      .json({ message: "New job created Sucessfully", job, success: true });
  } catch (err) {
    console.log(err);
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
    const jobs = await Job.find({ createdBy: adminId });

    if (!jobs) {
      return res.status(404).json({ message: "not found", success: false });
    }
    return res
      .status(200)
      .json({ message: "Company Found", jobs, success: true });
  } catch (error) {
    console.log(error);
  }
};
