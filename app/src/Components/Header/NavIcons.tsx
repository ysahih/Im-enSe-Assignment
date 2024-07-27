import Image from "next/image";
import Language from "./Language";
import { BiFontSize } from "react-icons/bi";
import { IoMoonOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-8 text-[#B4B4B4]">
      <BiFontSize className="cursor-pointer hover:text-[#42A4DF]" size={18} />
      <IoMoonOutline
        className="cursor-pointer  hover:text-[#42A4DF]"
        size={18}
      />
      <IoMdNotificationsOutline
        className="cursor-pointer  hover:text-[#42A4DF]"
        size={20}
      />
      <Language />
    </div>
  );
};

export default NavIcons;
