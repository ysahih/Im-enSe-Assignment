import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

interface Props {
    isOpen: boolean;
  }
      

const Dashboard: React.FC<Props> = ({ isOpen }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className={`relative inline-block flex items-center justify-center px-2 gap-2 h-10 cursor-pointer hover:text-[#42A4DF] rounded-md ${isOpen ? ' hover:text-white hover:bg-[#42A4DF]' : '' }`}

          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <AiOutlineHome className="size-[20px]" />
        {showPopup && !isOpen && (
          <div className="absolute left-14 w-[80px] bg-[#343434] text-white text-center py-2 text-xs rounded shadow-lg  z-10">
            Dashboard
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#343434]"></div>
            </div>
          </div>
        )}
        <span className={`flex items-center transition-width duration-200 text-[#626262] whitespace-nowrap  ${isOpen ? "w-full transition-none" : "hidden"}`}>
        Dashboard
        </span>
       </div>
    )
}

export default Dashboard;