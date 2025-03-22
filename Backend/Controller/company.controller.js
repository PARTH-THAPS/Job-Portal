import cloudinary from "../Config/cloudinary.js";
import getDataUri from "../Config/dataUri.js";
import { Company } from "../Models/company.model.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;

    if (!companyName) {
      return res
        .status(400)
        .json({ message: "Company name is required", success: true });
    }
    let comapany = await Company.findOne({ name: companyName });

    if (comapany) {
      return res
        .status(403)
        .json({ message: "you can not register same company", success: false });
    }

    let ReturnData = await Company.create({
      name: companyName,
      userId: req.id,
    });
    console.log(ReturnData);
    return res
      .status(201)
      .json({ message: "Company Registered", ReturnData, success: true });
  } catch (error) {
    console.log(error);
  }
};

export const getCompany = async (req, res) => {
  try {
    const userID = req.id;

    const companies = await Company.find(
      { userId: userID },
      { name: 1, createdAt: 1, logo: 1, _id: 0 }
    );

    if (!companies) {
      return res.status(404).json({ message: "company not found" });
    }

    return res.status(200).json({ companies, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const getCompanyById = async (req, res) => {
  try {
    const CompanyID = req.params.id;
    const companies = await Company.findById(CompanyID);

    if (!companies) {
      return res.status(404).json({ message: "company not found" });
    }
    return res.status(200).json({ companies, success: true });
  } catch (err) {
    console.log(err);
  }
};

export const updateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    //Cloudinary
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const logo = cloudResponse.secure_url;

    const updateData = { name, description, website, location, logo };

    const comapany = await Company.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!comapany) {
      return res
        .status(404)
        .json({ message: "company not found", success: false });
    } else {
      return res
        .status(200)
        .json({ message: "Company Updated Successfully", success: true });
    }
  } catch (err) {
    console.log(err);
  }
};
