import { Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import OutsideClickHandler from "react-outside-click-handler";
import CookieBanner from "./Cookiebanner";

const NavigationFooter: React.FC = () => {
  const [isMenu, setIsMenu] = useState<boolean>(false);

  return (
    <div className="w-full max-w-[520px] h-[68px] relative">
      <div className="w-full max-w-[520px] h-[68px] rounded-[100px] bg-white mt-[22px] text-black">
        <ul className="w-full h-full flex items-center justify-between md:justify-normal p-[10px]">
          <li>
            <Button
              onClick={() => setIsMenu(true)}
              className="duration-150 active:scale-95 overflow-hidden"
            >
                <BsThreeDotsVertical />
            </Button>
          </li>
          <li className="hidden sm:block">
            <Link href="/menu">
              <span className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[36px] ml-[34px] hover:bg-gray-100">MENU</span>
            </Link>
          </li>
          <li className="hidden sm:block">
            <Link href="/restaurant">
              <span className="h-[48px] cursor-pointer rounded-[100px] flex items-center justify-center p-[26px] ml-[36px] hover:bg-gray-100">HOME</span>
            </Link>
          </li>
          <li>
            <Link href="http://eepurl.com/iF-jpY">
              <span className="h-[48px] font-medium text-[14px] cursor-pointer rounded-[100px] flex items-center justify-center p-[26px] ml-[94px] text-white bg-black uppercase">SIGN UP</span>
            </Link>
          </li>
        </ul>
      </div>


      <OutsideClickHandler onOutsideClick={() => setIsMenu(false)}>
      <div style={{
    left: isMenu ? "5%" : "5px", // More towards the center
    width: isMenu ? "30%" : "0px", // Less width
  }}
  className={`
    ${isMenu ? "h-[200px] md:h-[150px]" : "h-20"} // Less height
    ${isMenu ? "-top-[300px] md:-top-[150px]" : "top-[15px]"} // Adjusted top position
    absolute bg-black text-white shadow-md duration-200 rounded-[10px] overflow-hidden`}

        >
        
          <ul>
            <li className="mb-[16px]">
              <Link href="/shop">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Services
                </div>
              </Link>
            </li>
           
            <li className="mb-[16px]">
              <Link href="/contact">
                <div className="text-[32px] hover:text-gray-600 h-[48px] px-[10px] border-b border-transparent hover:border-gray-300">
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </OutsideClickHandler>
      <CookieBanner />
    </div>
    
  );
};


export default NavigationFooter;