import DashboardPage from "@/features/dashboard";
import LoginPage from "@/features/login";
import React from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "@/components/layouts/page-layout";
import CartPage from "./features/cart";
import BillManagementPage from "./features/bills";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<PageLayout />}>
      <Route path="cart" element={<CartPage />} />
      <Route path="bills" element={<BillManagementPage />} />
      <Route index element={<DashboardPage />} />
    </Route>
  </Routes>
);

export default App;
