import analysis from "@/assets/images/dashboard/analysis.png";
import cart from "@/assets/images/dashboard/cart.png";
import history from "@/assets/images/dashboard/history.png";
import home from "@/assets/images/dashboard/home.png";
import medicine_2 from "@/assets/images/dashboard/medicine-2.png";
import medicine from "@/assets/images/dashboard/medicine.png";
import money from "@/assets/images/dashboard/money.png";
import order from "@/assets/images/dashboard/order.png";
import print from "@/assets/images/dashboard/print.png";
import { EPageStyle } from "@/constrants/styles";
import clsx from "clsx";
import React, { useMemo } from "react";
import { IoIosArrowForward } from "react-icons/io";

interface DashboardPageProps {}

interface FeatureItemProps {
  label: string;
  icon: string;
  alt: string;
}

const DashboardPage: React.FunctionComponent<DashboardPageProps> = () => {
  const features = useMemo(
    (): FeatureItemProps[] => [
      { label: "Bán hàng", icon: cart, alt: "cart" },
      { label: "Cắt liều", icon: medicine, alt: "medicine" },
      { label: "Lịch sử đơn hàng", icon: history, alt: "history" },
      {
        label: "In biên bản bàn giao nhà vận chuyển",
        icon: print,
        alt: "print",
      },
      {
        label: "Trả hàng tại nhà",
        icon: home,
        alt: "home",
      },
      { label: "Công nợ", icon: money, alt: "money" },
      { label: "Báo cáo quỹ", icon: analysis, alt: "analysis" },
      { label: "Đơn hàng Ecom", icon: order, alt: "order" },
      { label: "Xem lại toa thuốc", icon: medicine_2, alt: "medicine 2" },
    ],
    []
  );

  return (
    <div className={clsx(EPageStyle.MAIN, "pr-4")}>
      <div className="w-full px-4 py-3 space-y-5 rounded-md shadow bg-custom-color-gray-2 drop-shadow">
        <div className="w-full p-4 bg-white rounded-md shadow drop-shadow">
          <div className="flex items-center justify-between w-full">
            <span className="text-xl font-bold">Tính năng</span>
            <input
              autoComplete="off"
              type="text"
              name="search"
              placeholder="Tìm kiếm"
              className="w-56 px-3 py-2 text-sm duration-300 border border-gray-300 rounded-md outline-none hover:border-gray-600 focus:border-gray-600"
            />
          </div>

          <div className="flex flex-wrap items-center gap-5 mt-3">
            {features.map((feature, index) => (
              <button
                key={`feature-item-${index}`}
                className="flex-1 grid grid-rows-3 max-w-[150px] min-w-[150px] h-[150px]"
              >
                <div className="flex items-center justify-center h-full row-span-2">
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="w-14 h-14"
                  />
                </div>
                <span className="text-base">{feature.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="w-full p-4 bg-white rounded-md shadow drop-shadow">
          <div className="flex items-center justify-between w-full">
            <span className="text-xl font-bold">Đơn mở (0)</span>
            <button className="flex items-center gap-2 text-blue-600">
              <span className="text-sm leading-[15px]">Xem tất cả</span>
              <IoIosArrowForward className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
