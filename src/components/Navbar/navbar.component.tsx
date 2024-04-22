import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { LiaBalanceScaleSolid } from "react-icons/lia";
import { SlSettings } from "react-icons/sl";
import Image from "next/image";
import Logo from "@/assets/svg/finantial-balance-logo.svg";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white w-screen lg:w-24 h-20 lg:h-screen fixed bottom-0 flex lg: flex-col justify-center lg:justify-stretch radius rounded-t-xl lg:rounded-l-none lg:rounded-r-3xl lg:py-10">
      <div>
        <Logo className="hidden lg:block size-16 mx-auto " />
        <span className="hidden lg:block relative w-3/5 h-0.5 bg-primary mx-auto mt-3" />
      </div>

      <ul className="flex flex-row lg:flex-col w-full justify-around lg:justify-between lg:flex-wrap lg:my-10 lg:h-full">
        <li className="m-auto">
          <RiHomeLine className="size-8 lg:size-8" />
        </li>
        <li className="m-auto">
          <IoWalletOutline className="size-8 lg:size-8" />
        </li>
        <li className="m-auto">
          <LiaBalanceScaleSolid className="size-8 lg:size-8" />
        </li>
        <span className="hidden lg:block relative w-3/5 h-0.5 bg-primary mx-auto mt-40 " />
        <li className="m-auto">
          <SlSettings className="size-8 lg:size-8" />
        </li>
        <li></li>
      </ul>
    </nav>
  );
};
