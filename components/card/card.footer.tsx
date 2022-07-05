import React, { ReactNode } from "react";

interface CardFooter {
  children: ReactNode;
}

export const CardFooter: React.FC<CardFooter> = ({ children }) => {
  return <div className="flex w-full p-5">{children}</div>;
};
