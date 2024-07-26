"use client"
import { useState } from "react";
import Body from "./Components/Body";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import SubPages from "./Components/SubPages";





const ViolationsTable = () =>{

  const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="w-full h-screen grid grid-cols-[65px_1fr] grid-rows-[60px_35px_1fr]">
        <div className="row-span-3 col-span-1">
          <Sidebar isOpen={isOpen} toggle={()=>setIsOpen(false)}/>
        </div>

        <div className="col-span-1 row-span-1 ">
          <Header toggle={()=>setIsOpen(!isOpen)}/>
        </div>

        <div className="col-span-1 row-span-1">
          <SubPages />
        </div>
        
        <div className="text-white col-span-1 row-span-1">
          <Body/>
      </div>
    </div>
    // <Body/>
    // <SubPages/>
    )
}

export default ViolationsTable;