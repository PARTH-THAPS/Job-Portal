import React, { useEffect, useState } from "react";
import Navbar from "../src/components/shared/Navbar";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { CompaniesTable } from "./CompaniesTable";
import { useNavigate } from "react-router-dom";
import { useGetAllCompanies } from "../src/hooks/useGetAllCompanies";
import { useDispatch } from "react-redux";
import { setSearchCompanyByText } from "../src/redux/companySlice";

export const Companies = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  useGetAllCompanies();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchCompanyByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input
            className="w-fit"
            placeholder="Filter by name"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              navigate("/admin/companies/create");
            }}
          >
            New Company
          </Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  );
};
