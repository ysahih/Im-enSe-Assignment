"use client"
import * as React from "react"
import EquipmentCellProps from '../../Types/types';
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


type Checked = DropdownMenuCheckboxItemProps["checked"]



const Cell: React.FC<EquipmentCellProps> = ({ value }) => (

    <td className="border-b border-[#DCDCDC] p-2">
      <div className={`h-11 cursor-pointer mx-auto flex justify-center items-center w-11 rounded-full ${
        value > 0 ? (value >= 10 ? 'bg-[red] text-white' : 'bg-[yellow] text-[black]') : ''
      }`}>
        {value > 0 ? value : '-'}
      </div>
    </td>
  );

  
  const EquipmentCell: React.FC<EquipmentCellProps> = ({ value }) => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <td className="border-b border-[#DCDCDC] p-2">
            <div className={`h-11 cursor-pointer mx-auto flex justify-center items-center w-11 rounded-full ${
                 value > 0 ? (value >= 10 ? 'bg-[red] text-white' : 'bg-[yellow] text-[black]') : ''
                }`}>
                {value > 0 ? value : '-'}
            </div>
        </td>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 bg-white h-[556px] rounded-[5px]">
        <div >
            <img src="./preview.svg" alt="Image" />
        </div>
        <div className="bg-[red] w-[95%] text-xs flex justify-between">
            <h1 className="text-[#929292] font-normal">Comment</h1>
            <div className="flex items-center font-medium gap-2">
                <img src="./time.svg" alt="clock" />
                <p>15/11/2022</p>
                <p>10:34</p>
                <p className="">#03</p>
            </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}


  export default EquipmentCell;