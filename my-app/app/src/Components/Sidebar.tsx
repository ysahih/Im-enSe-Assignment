"use client"
import { useState } from "react";
import Image from "next/image";
import { useClickAway } from "@uidotdev/usehooks";





import Workers from "./Sidebar/Workers";
import Contracotrs from "./Sidebar/Contractors";
import Dashboard from "./Sidebar/Dashboard";
import Violarions from "./Sidebar/Violations";
import PPEs from "./Sidebar/PPEs";





const Sidebar : React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);
  const ref = useClickAway(() => {
    setIsOpen(false);
  });


  return (
    <div ref={ref}>
      <div className="w-full h-full bg-[red] border-b border-[#C4C4C4]">
        <div
          className={`fixed transition-width h-full bg-white  duration-300 ] ${
            isOpen ? "w-[250px]" : "w-[65px]"
          }`}
        >
          <div
            className="flex items-center justify-center h-[64px] cursor-pointer"
            onClick={handleTrigger}
          >
            <Image src="/logo.svg" alt='Logo' width={35} height={35} />
          </div>

        <div className={`text-[#C4C4C4] text-sm ${isOpen ? 'w-[80%] mx-auto' : ''} `}>
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
      </div>
    </div>
  );

    
};

export default Sidebar;
