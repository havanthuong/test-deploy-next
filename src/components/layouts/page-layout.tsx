import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

interface PageLayoutProps {}

const PageLayout: React.FunctionComponent<PageLayoutProps> = () => {
  return (
    <div className="relative w-full h-screen pt-16 pl-48">
      <Header />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default PageLayout;
