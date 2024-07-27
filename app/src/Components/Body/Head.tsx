"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TreeSelect } from "primereact/treeselect";
import Image from "next/image";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";

const Head = () => {
  const [values, setValues] = useState([
    new DateObject().subtract(4, "days"),
    new DateObject().add(4, "days"),
  ]);

  return (
    <div className="flex justify-between items-center h-30px ">
      <h1 className="text-[black] min-w-[200px]">P.P.E Violations Table</h1>

      <div className="flex gap-2 text-xs">
        <div className="border rounded-[2px] bg-white flex py-[2px] text-[#C8C8C8] items-center">
          <IoSearch className=" z-10 mx-2 text-xl " />
          <input
            type="text"
            placeholder=" Search workers ..."
            className="w-[300px] outline-none"
          />
        </div>

        <div>
          {/* !!should style the date picker */}
          <DatePicker
            value={values}
            onChange={setValues}
            inputClass="border rounded-[2px] outline-none bg-white text-black p-[4px] w-[180px]"
            range
            showOtherDays
            // animations={[transition()]}
          />
        </div>

        <div>
          <TreeSelect
            disabled
            placeholder="All Contractors"
            className="w-[180px] text-[#C8C8C8] p-[4px] w-full bg-white border rounded-[2px]"
          />
        </div>

        <div className="bg-white border rounded-[2px] w-[28px] flex items-center justify-center">
          <Image src="/full.svg" width={16} height={16} alt="full" />
        </div>
      </div>
    </div>
  );
};

export default Head;
