import React, { ReactNode } from "react";

interface TitleMenu {
  children: ReactNode;
}

export const TitleMenu: React.FC<TitleMenu> = ({ children, ...props }) => {
  return (
    <div
      className="my-8 flex h-[40px] w-full items-center justify-center bg-white"
      {...props}
    >
      <h1 className="font-arima text-2xl capitalize">{children}</h1>
    </div>
  );
};
