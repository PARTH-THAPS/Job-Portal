import React from "react";
import Navbar from "../src/components/shared/Navbar";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { CompaniesTable } from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

export const Companies = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className=" max-w-6xl mx-auto my-10">
        <div className="flex items-center justify-between my-5">
          <Input className="w-fit" placeholder="Filter by name" />
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
