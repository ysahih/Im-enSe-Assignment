"use client";
import React, { useState } from 'react';


const Head = () => {
  return (
    <div className='flex justify-between items-center bg-[red] h-30px '>
      <h1>P.P.E Violations Table</h1>
      <div className=''>
        <input type='text' placeholder='Search workers ...' className=''/>
      </div>
    </div>
  );
};


const Body = () => {


  return (
    <div className="bg-[#F2F2F2] border-t border-[#C4C4C4] h-full p-8">
      <Head/>
    </div>
  );
};



export default Body;    