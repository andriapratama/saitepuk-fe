import React from "react";

interface DrinkMenu {
  name: string;
  price: number;
  onClick: () => void;
}

export const DrinkMenu: React.FC<DrinkMenu> = ({ name, price, ...props }) => {
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
    <div
      className="mt-3 flex h-full w-full items-center justify-between border-b-2 border-black pb-1"
      {...props}
    >
      <div className="flex h-auto w-[85%] items-center pl-1">
        <div className="font-arima block">
          <div className="mb-1 flex-wrap">
            <h1 className="text-lg font-bold leading-none">{name}</h1>
          </div>
        </div>
      </div>

      <h1 className="font-arima pr-2 text-lg font-bold">{setPrice()}K</h1>
    </div>
  );
};
