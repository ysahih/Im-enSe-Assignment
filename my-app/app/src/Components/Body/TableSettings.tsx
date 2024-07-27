import { RiSettings5Fill } from "react-icons/ri";
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import { useContext } from "react";
import { useState } from "react";
import {columnContext } from "../Context/Context";
import ColumnContext from "../Context/Context";
import columns from "../Data/data";

import { Column } from '../../Types/types';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"




// type Checked = DropdownMenuCheckboxItemProps["checked"]



const TableSettings = () => {
    
    const context: columnContext | null = useContext(ColumnContext);
    const [checkedColumns, setCheckedColumns] = useState<Set<string>>(new Set(columns.map(column => column.label)));

    const addColumn = (newColumn: Column) => {
        context?.setColumnsState(prevColumns => [...prevColumns, newColumn]);
    };

    const removeColumn = (label: string) => {
        context?.setColumnsState(prevColumns => prevColumns.filter(column => column.label !== label));
    };
      
    const handleCheckboxChange = (column: Column, isChecked: boolean) => {
        if (isChecked) {
            addColumn(column);
        } else {
            removeColumn(column.label);
        }
    };

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
            {columns.map((column) => (
                        <div key={column.label} className="flex items-center py-2 gap-2">
                            <input
                                type="checkbox"
                                id={column.label}
                                className="opacity-70 h-5 w-5"
                                checked={checkedColumns.has(column.label)}
                                onChange={(e) => {
                                    const isChecked = e.target.checked;
                                    setCheckedColumns(prev => {
                                        const updated = new Set(prev);
                                        if (isChecked) {
                                            updated.add(column.label);
                                        } else {
                                            updated.delete(column.label);
                                        }
                                        return updated;
                                    });
                                    handleCheckboxChange(column, isChecked);
                                }}
                            />
                            <label
                                htmlFor={column.label}
                                className="text-[#313131] text-xs"
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