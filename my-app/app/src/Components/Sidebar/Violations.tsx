
import { useState } from "react";
import { MdFrontHand } from "react-icons/md";


interface Props {
    isOpen: boolean;
  }
      

const Violarions: React.FC<Props> = ({ isOpen }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <div className="relative inline-block flex items-center justify-center h-12 cursor-pointer hover:text-[#42A4DF]">
        <div
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
          className="cursor-pointer"
        >
          <MdFrontHand className="size-[12px] rounded-full outline outline-[1px] outline-[#42A4DF] outline-offset-2 text-[#42A4DF]"/>
        </div>
        {showPopup && !isOpen && (
          <div className="absolute left-14 w-[80px] bg-[#343434] text-white text-center py-2 text-xs rounded shadow-lg  z-10">
           P.P.E Violarions
            <div className="absolute top-1/2 -left-2 transform -translate-y-1/2">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#343434]"></div>
            </div>
          </div>
        )}
        <span className={`transition-width duration-200 ${isOpen ? "w-full" : "hidden"} text-[black] whitespace-nowrap`}>
        P.P.E Violarions
        </span>
       </div>
    )
}


export default Violarions;  