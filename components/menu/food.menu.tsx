import React from "react";

interface FoodMenu {
  name: string;
  desc: string;
  price: number;
  status: string;
  onClick: () => void;
}

export const FoodMenu: React.FC<FoodMenu> = ({
  name,
  desc,
  price,
  status,
  ...props
}) => {
  const setPrice = () => {
    let newPrice = 0;
    if (!price) {
      newPrice = 0;
    } else {
      newPrice = price / 1000;
    }

    return newPrice;
  };
  return (
    <div className="mb-3">
      <div
        className=" flex h-full w-full items-center justify-between border-b-2 border-black pb-2"
        {...props}
      >
        <div className="flex h-auto w-[85%] items-center pl-1">
          <div className="font-arima block">
            <div className="mb-1 flex flex-wrap items-center">
              <h1 className="mr-2 text-lg font-bold leading-none">{name}</h1>
              {status === "enable" ? (
                <div className="font-arima flex w-[50px] items-center justify-center rounded border border-slate-700 px-2 text-sm">
                  New
                </div>
              ) : null}
            </div>
            <div className="flex-wrap">
              <p className="text-sm leading-none">{desc}</p>
            </div>
          </div>
        </div>

        <h1 className="font-arima pr-2 text-lg font-bold">{setPrice()}K</h1>
      </div>
    </div>
  );
};
