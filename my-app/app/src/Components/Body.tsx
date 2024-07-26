"use client";
import React, { useState } from 'react';

const Body = () => {


  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [selectedContractor, setSelectedContractor] = useState<string>('All Contractors');
  const [searchTerm, setSearchTerm] = useState<string>('');


  return (
    <div className="bg-[#F2F2F2] border-t border-[#C4C4C4] h-full p-8">
      {/* <div className="flex items-center justify-between mb-4">
        <h2 className="text-md text-[black]">P.P.F Violations Table</h2>
        <div className="flex space-x-2">
        <div className="flex items-center w-full max-w-md mx-auto border border-gray-300 rounded-full p-2 bg-gray-100">
      <span className="mr-2 text-gray-500">🔍</span>
      <input
        type="text"
        placeholder="Search workers..."
        className="border-none outline-none flex-grow p-2 rounded-full text-base"
      />
    </div>
              <div className="flex space-x-2">
            
          </div>
          <select
            value={"All Contractors"}
            className="border border-gray-300 p-2 rounded text-[black]"
          >
            All Contractors
          </select>
          <button
            className="border border-gray-300 p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Download
          </button>
        </div>
      </div> */}
  
    </div>
  );
};


    // return (
    //     <div className="bg-[#F2F2F2] border-t border-[#C4C4C4] h-full">

    //     </div>
    // );


export default Body;    