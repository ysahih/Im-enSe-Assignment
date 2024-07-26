"use client"
import { useState } from "react";
import Image from "next/image";
import { useClickAway } from "@uidotdev/usehooks";
import { IoMenuOutline } from "react-icons/io5";
import Workers from "./Sidebar/Workers";
import Contracotrs from "./Sidebar/Contractors";
import Dashboard from "./Sidebar/Dashboard";
import Violarions from "./Sidebar/Violations";
import PPEs from "./Sidebar/PPEs";



interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar :  React.FC<Props> = ({ isOpen, toggle }) => {



  const ref = useClickAway(() => {
    toggle();
  });


  return (
    <div ref={ref} className="">
      <div className="w-full h-full flex ">
        <div
          className={`border border-[#C4C4C4] fixed transition-width h-full bg-white duration-300 ] ${
            isOpen ? "w-[250px]" : "w-[65px]"
          }`}
        >
          <div
            className="flex items-center justify-center h-[64px] cursor-pointer"
          >
            { isOpen ? (
              <div className="flex items-center gap-2" >
                <a href="/">
                  <Image src="/toggledlogo.svg" alt='Logo' width={190} height={35} />
                </a>
                <IoMenuOutline className="size-[25px] text-[#B4B4B4]" onClick={toggle}/>
              </div>

              ) : (
                <Image src="/logo.svg" alt='Logo' width={35} height={35}  />)
            }
          </div>

        <div className={` text-sm ${isOpen ? 'w-[80%] mx-auto' : ''} `}>
          <div className={`${isOpen} py-5`}>
            <Dashboard isOpen={isOpen}/>
            <Violarions isOpen={isOpen} />
          </div>

          <hr className={`${isOpen ? 'hidden' : ''} `}/>
          <h1 className={`${isOpen ? '' : 'hidden'} font-medium text-xs text-[#D7D7D7]`}>MANAGE</h1>


          <div className="py-5">
            <PPEs isOpen={isOpen}/>
            <Contracotrs isOpen={isOpen}/>
            <Workers isOpen={isOpen}/>
          </div>
        </div>

        </div>
        <div className="h-[96px] absolute bottom-0 w-[250px]">
          <hr className=""/>
          <div className="text-[#939393] p-3">
            <h1 className="font-medium text-[13px] pb-2">@ App name 2021</h1>
            <p className="break-words text-[11px]">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor
                incididunt ut.</p>
          </div>
        </div>
      </div>
    </div>
  );

    
};

export default Sidebar;
