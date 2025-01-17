import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../utils/constant";


export default function useGetAllJobs() {
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`,{ });
      } catch (err) {}
    };
  },[]);
}
