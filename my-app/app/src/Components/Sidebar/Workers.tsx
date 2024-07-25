import { useState } from "react";
import { FaUser } from "react-icons/fa";

interface WorkerProps {
    isOpen: boolean;
  }
  
  const Workers: React.FC<WorkerProps> = ({ isOpen }) => {
    const [showPopup, setShowPopup] = useState(false);
    return (
      <div className={`relative inline-block flex items-center text-[#626262] justify-center px-2 gap-2 h-10 cursor-pointer hover:text-[#42A4DF] rounded-md ${isOpen ? ' hover:text-white hover:bg-[#42A4DF]' : '' }`}

             onMouseEnter={() => setShowPopup(true)}
             onMouseLeave={() => setShowPopup(false)}
           >
             <FaUser className={` ${isOpen ? 'hover:text-[white]' : ''} size-[20px] text-[#C4C4C4]`} />
           {showPopup && !isOpen && (
             <div className="absolute left-14 w-[80px] bg-[#343434] text-white text-center py-2 text-xs rounded shadow-lg  z-10">
               Workers
               <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
                 <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#343434]"></div>
               </div>
             </div>
           )}
           <span className={`transition-width duration-200 ${isOpen ? "w-full transition-none" : "hidden"}  whitespace-nowrap`}>
            Workers
           </span>
          </div>
    )
};

export default Workers;