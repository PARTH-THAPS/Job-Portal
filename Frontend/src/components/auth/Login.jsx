import React from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          action=""
          className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          <div className="my-2">
            <Label>Email</Label>
            <Input type="email" placeholder="Enter Email" />
          </div>

          <div className="my-2">
            <Label>Password</Label>
            <Input type="password" placeholder="Enter Password" />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center space-x-2">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full my-4">
            Log In
          </Button>

          <span>
            Don't Have an Account?
            <Link to="/signup" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
