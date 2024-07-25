"use client"
import { useState } from "react";
import Image from "next/image";





import Workers from "./Sidebar/Workers";
import Contracotrs from "./Sidebar/Contractors";
import Dashboard from "./Sidebar/Dashboard";
import Violarions from "./Sidebar/Violations";
import PPEs from "./Sidebar/PPEs";





const Sidebar : React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleTrigger = () => setIsOpen(!isOpen);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="">
      <div className="w-full h-full bg-[red] border-b border-[#C4C4C4]">
        {/* <div className="content w-[calc(100%-50px)] ml-auto p-4 h-full break-words">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/mejdej93/pen/eYYJGjd"
          >
            original Pen
          </a>
        </div> */}

        <div
          className={`fixed transition-width h-full bg-white  duration-300 ] ${
            isOpen ? "w-[300px]" : "w-[65px]"
          }`}
        >
          <div
            className="flex items-center justify-center h-[64px] cursor-pointer"
            onClick={handleTrigger}
          >
            <Image src="/logo.svg" alt='Logo' width={35} height={35} />
          </div>

        <div className="text-[#C4C4C4] ">

          <div className="py-5">
            <Dashboard isOpen={isOpen}/>
          {/* <div className="flex items-center justify-center h-10 cursor-pointer hover:text-[#42A4DF]">
            <AiOutlineHome className="size-[20px]" />
            <span className={`transition-width duration-200 ${isOpen ? "w-full" : "hidden"}  text-[black] whitespace-nowrap `}>
              Home
            </span>
          </div> */}

          {/* <div className="flex items-center  justify-center h-12 cursor-pointer hover:text-[#42A4DF]">
            <MdFrontHand className="size-[12px] rounded-full outline outline-[1px] outline-[#42A4DF] outline-offset-2 text-[#42A4DF]"/>
            <span className={`transition-width duration-200 ${isOpen ? "w-full" : "hidden"}  text-[black] whitespace-nowrap `}>
              Menu item 2
            </span>
          </div> */}
          <Violarions isOpen={isOpen}/>

          </div>

          <hr className={`${isOpen ? 'hidden' : ''} `}/>
          <h1 className={`${isOpen ? '' : 'hidden'} font-medium text-xs text-[#D7D7D7]`}>MANAGE</h1>


          <div className="py-5">
          {/* <div className="flex items-center  justify-center h-12 cursor-pointer hover:text-[#42A4DF]">
            <GiGloves className=" size-[20px]" />
            <span className={`transition-width duration-200 ${isOpen ? "w-full" : "hidden"}  text-[black] whitespace-nowrap `}>
              Menu item 3
            </span>
          </div> */}
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
