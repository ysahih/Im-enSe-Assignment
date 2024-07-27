import { RiSettings5Fill } from "react-icons/ri";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import columns from "../Data/data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




type Checked = DropdownMenuCheckboxItemProps["checked"]



const TableSettings: React.FC = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <th className="p-2 cursor-pointer">
            <RiSettings5Fill className='size-[20px]'/>
        </th>
      </DropdownMenuTrigger>
       

      <DropdownMenuContent className="bg-white h-[] rounded-[5px] border border-[#DCDCDC]">
        <FormGroup className="p-2">
            <h1 className="text-xs font-medium text-[#989797]">Select columns to display</h1>
            {columns.map((column, index) => (
            //   <FormControlLabel control={<Checkbox defaultChecked className="bg-red-500 text-red-500" />}   label={column.label} key={index} />
                <div className="flex items-center py-2 gap-2">
                    <input
                        // checked
                      type="checkbox"
                      id="checkbox"
                      className="opacity-70 h-5 w-5"
                    />
                    <label
                      htmlFor="checkbox"
                      className="text[#313131] text-xs"
                    >
                      {column.label}
                    </label>
                </div>
            ))}
        </FormGroup>
      </DropdownMenuContent>
    </DropdownMenu>
    
  );
}

export default TableSettings;