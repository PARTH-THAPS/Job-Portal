import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar } from "./ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { AppliedJobTable } from "./AppliedJobTable";
import { UpdateProfileDialog } from "./UpdateProfileDialog";

const skills = ["Html", "Css"];
const isResume = true;
export const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://coralogix.com/wp-content/uploads/2023/03/MongoDB-1000X1000.png"
                alt="profile"
              />
            </Avatar>

            <div>
              <h1 className="font-medium text-xl">Full Name</h1>
              <p>Add Your Bio Here</p>
            </div>
          </div>
          <Button
            className="text-right"
            variant="outline"
            onClick={() => {
              setOpen(true);
            }}
          >
            <Pen />
          </Button>
        </div>
        <div className="my-5">
          <div className="flex items-center gap-3 my-2">
            <Mail />
            <span>parth@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 my-2">
            <Contact />
            <span>9511157323</span>
          </div>
        </div>

        <div className="my-4">
          <h1>Skills</h1>
          <div className="flex items-center gap-1">
            {skills.length != 0 ? (
              skills.map((Item, index) => {
                return <Badge key={index}>{Item}</Badge>;
              })
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label className="text-md font-bold"> Resume</Label>
          {isResume ? (
            <a
              target="_blank"
              href="https://youtube.com/"
              className="text-blue-500 w-full hover:underline cursor-pointer "
            >
              Go to YouTube
            </a>
          ) : (
            <span>NA</span>
          )}
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-2xl">
          <h1 className="font-bold text-lg my-5">Applied Jobs</h1>
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};
