import { toCurrency } from "@/shared/utils";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { twMerge } from "tailwind-merge";

export interface HighlightInfoProps {
  label: string;
  value: number;
  currency: string;
  icon?: React.ReactNode;
  className?: string;
}

export const HighlightInfo: React.FC<HighlightInfoProps> = ({
  currency,
  label,
  value,
  className,
  icon,
}) => {
  return (
    <div
      className={twMerge(
        "text-secondary md:bg-backgrondSec w-full md:px-5 py-2 md:py-6 rounded-xl flex flex-row md:flex-col justify-between relative",
        className
      )}
    >
      <div className="flex flex-row justify-between w-fit md:text-sm">
        <h4>{label}</h4>
        <span className="hidden md:block size-7 absolute top-3 right-3">
          {icon && icon}
        </span>
      </div>
      <p className="text-white font-bold w-fit md:text-xl">
        {currency} {toCurrency(value)}
      </p>
    </div>
  );
};
