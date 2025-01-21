import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setSingleJob } from "../redux/jobSlice";
import axios from "axios";

export default function useGetSingleJob(jobId) {
  const dispatch = useDispatch();
 
}
