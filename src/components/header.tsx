import React from "react";
import profile from "@/assets/images/profile.png";
import { IoMdNotificationsOutline } from "react-icons/io";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className="fixed top-0 flex items-center gap-4 pr-6 justify-end w-[calc(100%-192px)] h-16 border-b border-gray-300 left-48">
      <IoMdNotificationsOutline className="text-3xl text-black cursor-pointer" />
      <div className="flex items-center gap-4">
        <img
          src={profile}
          alt="profile"
          className="object-cover object-center w-10 h-10 rounded-full"
        />
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold text-black">
            04042 - Nguyễn Chí Bảo
          </span>
          <span className="text-sm font-bold text-blue-400">
            80006 - LC HCM 72 Tân Mỹ
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
