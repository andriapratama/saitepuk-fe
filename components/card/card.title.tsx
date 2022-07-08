import React, { ReactNode } from "react";

interface CardTitle {
  children: ReactNode;
}

export const CardTitle: React.FC<CardTitle> = ({ children }) => {
  return (
    <div className="w-full border-b border-slate-400 p-5">
      <div className="font-arima text-2xl text-slate-700">{children}</div>
    </div>
  );
};
