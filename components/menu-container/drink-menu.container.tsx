import React from "react";
import { TitleMenu } from "../title-menu";
import { DrinkMenu } from "../menu/drink.menu";

interface Data {
  id: number;
  name: string;
  desc: string;
  category: string;
  subCategory: string;
  price: number;
}

interface MenuContainer {
  children: string;
  data: Data[];
  subCategory: string;
}
export const DrinkMenuContainer: React.FC<MenuContainer> = ({
  children,
  data,
  subCategory,
}) => {
  return (
    <>
      <TitleMenu>{children}</TitleMenu>

      <div className="w-full">
        {data.map((value, index) => {
          if (value.category === "drink" && value.subCategory === subCategory) {
            return (
              <DrinkMenu name={value.name} price={value.price} key={index} />
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};
