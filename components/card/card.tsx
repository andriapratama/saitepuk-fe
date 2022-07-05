import React, { ReactNode } from "react";

interface Card {
  width: string;
  children: ReactNode;
  onClick: (active: any) => void;
}

export const Card: React.FC<Card> = ({ width, children, ...props }) => {
  const setClassName =
    "border border-slate-400 bg-white shadow-lg shadow-black rounded-lg";

  const className = () => {
    let newClassName = "";

    if (width) {
      newClassName = setClassName + " " + width;
    }

    return newClassName;
  };

  return (
    <div className={className()} {...props}>
      {children}
    </div>
  );
};
