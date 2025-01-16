import React, { useEffect } from "react";

export default function useGetAllJobs() {
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get();
      } catch (err) {}
    };
  });
}
