import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../redux/jobSlice";
import axios from "axios";

export default function useGetAllJobs() {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllJobs();
  }, []);
}
