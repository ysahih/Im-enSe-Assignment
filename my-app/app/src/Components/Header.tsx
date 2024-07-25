"use client";

import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import Language from "./Language";
import NavIcons from "./NavIcons";
import Profile from "./Profile";

const Header = ()=>{

  
        return (
          <nav className="bg-white">
            <div className=" flex items-center justify-between mx-auto p-4">

              <div className="flex items-center gap-3">
                <IoMenuOutline className="size-[20px] text-[#B4B4B4]" />
                <a href="/" className="">
                 <span className="text-l font-medium text-black">Overview</span>
                </a>
              </div>

              <div className="flex items-center">
                <NavIcons/>
                <Profile/>
              </div>
          
             
            </div>
          </nav>
   );
};


export default Header;