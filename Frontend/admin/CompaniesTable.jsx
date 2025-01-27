import React from "react";
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

export const CompaniesTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>A List of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>LOGO</TableHead>
            <TableHead>NAME</TableHead>
            <TableHead>DATE</TableHead>
            <TableHead className="text-right">ACTION</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>
            <Avatar>
              <AvatarImage src="https://pngimg.com/d/github_PNG45.png" />
            </Avatar>
          </TableCell>
          <TableCell>Company Name</TableCell>
          <TableCell>18-07-2024</TableCell>
          <TableCell className="text-right cursor-pointer">
            <Popover>
              <PopoverTrigger>
                <MoreHorizontal />
              </PopoverTrigger>
              <PopoverContent className="w-32">
                <div className="flex items-center gap-2 w-fit cursor-pointer">
                  <Edit2 className="w-4" />
                  <span>Edit</span>
                </div>
              </PopoverContent>
            </Popover>
          </TableCell>
        </TableBody>
      </Table>
    </div>
  );
};
