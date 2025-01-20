import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setSingleJob } from "../redux/jobSlice";
import axios from "axios";

export default function useGetSingleJob(jobId) {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setSingleJob(res.data.jobs));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllJobs();
  }, []);
}
