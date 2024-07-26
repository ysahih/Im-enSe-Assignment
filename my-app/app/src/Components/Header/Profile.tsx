import React, { useState } from 'react';
import Image from 'next/image';
import { RiSettings5Fill } from "react-icons/ri";
import { MdOutlineLocalPolice } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useClickAway } from "@uidotdev/usehooks";




const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  return (
    <div className="flex items-center cursor-pointer justify-center gap-2 w-[280px] font-medium text-sm text-[#7A7A7A]"
    onClick={toggleDropdown}
    >
      <button 
        type="button" 
        className="flex items-center " 
        // id="user-menu-button" 
        // aria-expanded={isOpen} 
      >
        <Image  src="/Ellipse.svg" alt="search" width={31} height={31}/>
      </button>
        <p>
           BESIX Group
        </p>
        <div className='ml-[30px] ' >
          <Image src="/Arrow.svg" alt='Icon' width={14} height={10} />
        </div>
      {isOpen && (
        <div className="absolute z-20 top-14 rounded-[5px] right-8 list-none bg-white rounded-lg shadow" id="user-dropdown" ref={ref}>
          <div className="px-4 py-3">
            <span className="block text-sm  text-gray-900 ">BESIX Group</span>
            <span className="block text-xs font-small text-gray-500 truncate ">besix.group@besix.be</span>
          </div>
          <hr className=''/>
          <ul className="py-2" aria-labelledby="user-menu-button">
            <li className='flex align-center px-4 py-2 gap-1'>
              <RiSettings5Fill className='size-[20px]'/>
              <a href="#" className="block text-sm text-gray-700 ">Profile settings</a>
            </li>
          
            <li className='flex align-center px-4 py-2 pb-4 gap-1'>
              <MdOutlineLocalPolice  className='size-[20px]'/>
              <a href="#" className="block text-sm text-gray-700 ">Our policies</a>
            </li>

            <hr className='pb-2'/>
            <li className='flex align-center px-4 py-2 gap-1'>
              <RiLogoutBoxRFill className='size-[20px]'/>
              <a href="#" className="block text-sm text-gray-700 ">Log out</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}



export default Profile;
