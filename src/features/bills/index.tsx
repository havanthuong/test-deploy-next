import { EPageStyle } from "@/constrants/styles";
import clsx from "clsx";
import React from "react";

interface BillManagementPageProps {}

const BillManagementPage: React.FunctionComponent<
  BillManagementPageProps
> = () => {
  return <div className={clsx(EPageStyle.MAIN)}>bill</div>;
};

export default BillManagementPage;
