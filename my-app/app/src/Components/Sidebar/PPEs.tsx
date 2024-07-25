import { useState } from "react";
import { MdWork } from "react-icons/md";
import { GiGloves } from "react-icons/gi";


interface Props {
  isOpen: boolean;
}


const PPEs: React.FC<Props> = ({ isOpen }) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
          
        <div className="relative inline-block flex items-center justify-center h-12 cursor-pointer hover:text-[#42A4DF]">
         <div
           onMouseEnter={() => setShowPopup(true)}
           onMouseLeave={() => setShowPopup(false)}
           className="cursor-pointer"
         >
           <GiGloves className=" size-[20px]" />
         </div>
         {showPopup && !isOpen && (
           <div className="absolute left-14 w-[80px] bg-[#343434] text-white text-center py-2 text-xs rounded shadow-lg  z-10">
             P.P.Es
             <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
               <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#343434]"></div>
             </div>
           </div>
         )}
         <span className={`transition-width duration-200 ${isOpen ? "w-full" : "hidden"} text-[black] whitespace-nowrap`}>
          P.P.Es
         </span>
        </div>
  
  );
}

export default PPEs;