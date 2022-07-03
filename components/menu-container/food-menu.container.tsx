import React from "react";
import { TitleMenu } from "../title-menu";
import { FoodMenu } from "../menu/food.menu";

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
export const FoodMenuContainer: React.FC<MenuContainer> = ({
  children,
  data,
  subCategory,
}) => {
  return (
    <>
      <TitleMenu>{children}</TitleMenu>

      <div className="w-full">
        {data.map((value, index) => {
          if (value.category === "food" && value.subCategory === subCategory) {
            return (
              <FoodMenu
                name={value.name}
                desc={value.desc}
                price={value.price}
                key={index}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};
