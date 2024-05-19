import { EPageStyle } from "@/constrants/styles";
import clsx from "clsx";
import React from "react";

interface CartPageProps {}

const CartPage: React.FunctionComponent<CartPageProps> = () => {
  return <div className={clsx(EPageStyle.MAIN)}>cart</div>;
};

export default CartPage;
