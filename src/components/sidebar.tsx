import fpt_retail from "@/assets/images/fpt-retail.png";
import clsx from "clsx";
import React, { ReactNode, useMemo } from "react";
import { AiOutlineHome, AiOutlinePoweroff } from "react-icons/ai";
import { IoCartOutline, IoPrintOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";

interface SidebarProps {}

interface MenuItemProps {
  title: string;
  icon: ReactNode;
  to: string;
}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  const items = useMemo(
    (): MenuItemProps[] => [
      {
        title: "Trang chủ",
        icon: <AiOutlineHome className="text-xl text-white" />,
        to: "/",
      },
      {
        title: "Giỏ hàng",
        icon: <IoCartOutline className="text-xl text-white" />,
        to: "/cart",
      },
      {
        title: "In hóa đơn",
        icon: <IoPrintOutline className="text-xl text-white" />,
        to: "/bills",
      },
    ],
    []
  );

  return (
    <div className="fixed top-0 left-0 flex flex-col w-48 h-full bg-custom-color-blue-1">
      <div className="flex items-center justify-center w-full h-16">
        <img src={fpt_retail} alt="fpt retail" className="h-10" />
      </div>
      <div className="flex flex-col justify-between flex-1 w-full my-3">
        <div className="w-full space-y-2">
          {items.map((item, index) => (
            <NavLink
              className={({ isActive }) =>
                clsx(
                  "flex h-10 pl-3 items-center justify-start gap-2 border-l-4 duration-300",
                  {
                    "border-custom-color-orange-1 bg-custom-color-blue-2":
                      isActive,
                    "border-transparent bg-transparent": !isActive,
                  }
                )
              }
              key={`sidebar-menu-item-${index}`}
              to={item.to}
              end
            >
              {item.icon}
              <span className="text-base text-white">{item.title}</span>
            </NavLink>
          ))}
        </div>

        <button
          className="flex items-center justify-start h-10 gap-2 pl-3 border-l-4 border-transparent"
          onClick={onLogout}
        >
          <AiOutlinePoweroff className="text-xl text-white" />
          <span className="text-base text-white">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
