import React, { useState } from "react";
import Navbar from "../src/components/shared/Navbar";
import { Label } from "../src/components/ui/label";
import { Input } from "../src/components/ui/input";
import { Button } from "../src/components/ui/button";
import { useNavigate } from "react-router-dom";
import { COMPANY_API_END_POINT } from "../src/utils/constant";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../src/redux/companySlice";
import axios from "axios";

export const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();
  const registerNewCompany = async () => {
    try {
      const res = await axios.post(
        `${COMPANY_API_END_POINT}/register`,
        {
          companyName,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        console.log("res new" + JSON.stringify(res));
        const companyId = res?.data?.ReturnData?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (err) {
      console.log(err + " h");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto">
        <div className="my-10">
          <h1 className="font-bold text-2xl">Your Company Name </h1>
          <p>
            What would you like give your company name ?<br /> You can change
            this later
          </p>
        </div>

        <Label>Company Name</Label>
        <Input
          type="text"
          className="my-2"
          placeholder="JobHunt , Microsoft"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
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
