import React, { ReactNode } from "react";

interface CardBody {
  children: ReactNode;
}

export const CardBody: React.FC<CardBody> = ({ children }) => {
  return <div className="w-full border-b border-slate-400 p-5">{children}</div>;
};
