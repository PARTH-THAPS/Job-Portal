import React, { useState } from "react";
import Navbar from "../src/components/shared/Navbar";
import { Label } from "../src/components/ui/label";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_END_POINT } from "../src/utils/constant";

export const CompanyCreate = () => {
  const navigate = useNavigate();
  const [companyName, setCompanyName] = useState();
  const registerNewCompany = async () => {
    try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`);
    } catch (err) {
      console.log();
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Comapny Name </h1>
          <p>
            What would you like give your company name ? You can chnage this
            later
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt , Microsoft"
        ></Input>
        <div className="flex items-center gap-2 my-10">
          <Button
            variant="outline"
            onClick={() => navigate("/admin/companies")}
          >
            Cancel
          </Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
      ;
    </div>
  );
};
