import React, { useEffect, useState } from "react";
import Navbar from "../src/components/shared/Navbar";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "../src/redux/companySlice";
import AdminJobsTable from "./AdminJobsTable";
import useGetAllAdminJobs from "../src/hooks/useGetAllAdminJobs";
import { setSearchJobByText } from "../src/redux/jobSlice";

const AdminJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name or role"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              navigate("/admin/jobs/create");
            }}
          >
            Post New Jobs
          </Button>
        </div>
        <AdminJobsTable />
      </div>
    </div>
  );
};

export default AdminJobs;
