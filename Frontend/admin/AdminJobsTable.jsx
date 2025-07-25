import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from ".././src/components/ui/table";
import { Avatar, AvatarImage } from "../src/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../src/components/ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const AdminJobsTable = () => {
  const { companies, searchCompanyByText } = useSelector(
    (store) => store.company
  );
  const { allAdminJobs, searchJobByText } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allAdminJobs);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredCompany =
      (allAdminJobs.length >= 0 &&
        allAdminJobs.filter((job) => {
          if (!searchJobByText) {
            return true;
          }
          return job?.title
            ?.toLowerCase()
            .includes(searchJobByText.toLowerCase());
        })) ||
      job?.company?.name?.toLowerCase().includes(searchJobByText.toLowerCase());
    setFilterJobs(filteredCompany);
  }, [companies, searchJobByText]);

  return (
    <div>
      <Table>
        <TableCaption>A List of your posted jobs </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filterJobs.length <= 0 ? (
            <span>You haven't registered any company yet</span>
          ) : (
            filterJobs.map((job) => {
              return (
                <TableRow key={job._id}>
                  <TableCell>{job?.companyId?.name}</TableCell>
                  <TableCell>{job?.title}</TableCell>
                  <TableCell>
                    {job?.companyId?.createdAt.split("T")[0]}
                  </TableCell>
                  <TableCell className="text-right cursor-pointer">
                    <Popover>
                      <PopoverTrigger>
                        <MoreHorizontal />
                      </PopoverTrigger>
                      <PopoverContent className="w-32">
                        <div
                          onClick={() => {
                            navigate(`/admin/companies/${company._id}`);
                            console.log("DATA");
                          }}
                          className="flex items-center gap-2 w-fit cursor-pointer"
                        >
                          <Edit2 className="w-4" />
                          <span>Edit</span>
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};
export default AdminJobsTable;
