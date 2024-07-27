"use client";

import { IoMenuOutline } from "react-icons/io5";
import { useState } from "react";
import Language from "./Header/Language";
import NavIcons from "./Header/NavIcons";
import Profile from "./Header/Profile";

interface HeaderProps {
  toggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggle }) => {
  return (
    <nav className="bg-white border-b border-[#C4C4C4]">
      <div className=" flex items-center justify-between mx-auto p-4">
        <div className="flex items-center gap-3">
          <IoMenuOutline
            className="size-[25px] cursor-pointer text-[#B4B4B4]"
            onClick={toggle}
          />
          <a href="/" className="">
            <span className="text-l font-medium text-black">Overview</span>
          </a>
        </div>

        <div className="flex items-center">
          <NavIcons />
          <Profile />
        </div>
      </div>
    </nav>
  );
};

export default Header;
