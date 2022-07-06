import React, { ReactNode } from "react";

interface ButtonMenu {
  children: ReactNode;
  onClick: () => void;
  key: number;
}

export const ButtonMenu: React.FC<ButtonMenu> = ({ children, ...props }) => {
  return (
    <button
      className="font-arima w-[30%] cursor-pointer rounded-xl border border-black bg-white py-2 text-center outline-none"
      {...props}
    >
      {children}
    </button>
  );
};
