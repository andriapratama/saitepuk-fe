import { ReactNode } from "react";

interface Button {
  children: ReactNode;
  variant?: "primary" | "danger" | "success" | "secondary";
  onClick: () => void;
}

export const Button: React.FC<Button> = ({ children, variant, ...props }) => {
  const setClassName =
    "font-arima py-1 px-4 border rounded-md cursor-pointer outline-none text-white";

  const className = () => {
    let newClassName = "";

    if (variant === "primary") {
      newClassName = setClassName + " bg-blue-500 border-blue-500";
    } else if (variant === "danger") {
      newClassName = setClassName + " bg-red-500 border-red-500";
    } else if (variant === "secondary") {
      newClassName = setClassName + " bg-slate-500 border-slate-500";
    } else if (variant === "success") {
      newClassName = setClassName + " bg-green-700 border-green-700";
    }

    return newClassName;
  };
  return (
    <button className={className()} {...props}>
      {children}
    </button>
  );
};
