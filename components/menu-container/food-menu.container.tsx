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
  image: string;
  status: string;
}

interface MenuContainer {
  children: string;
  data: Data[];
  subCategory: string;
  setIsShowModal: (active: boolean) => void;
  setImage: (active: string) => void;
}
export const FoodMenuContainer: React.FC<MenuContainer> = ({
  children,
  data,
  subCategory,
  setIsShowModal,
  setImage,
}) => {
  return (
    <>
      <TitleMenu>{children}</TitleMenu>

      <div className="w-full">
        {data.map((value, index) => {
          if (
            value.category === "food" &&
            value.subCategory === subCategory &&
            value.status === "enable"
          ) {
            return (
              <FoodMenu
                name={value.name}
                desc={value.desc}
                price={value.price}
                status={value.status}
                key={index}
                onClick={() => {
                  if (value.image === "") {
                    setIsShowModal(false);
                  } else {
                    setIsShowModal(true);
                    setImage(value.image);
                  }
                }}
              />
            );
          } else {
            return null;
          }
        })}

        {data.map((value, index) => {
          if (
            value.category === "food" &&
            value.subCategory === subCategory &&
            value.status === "disable"
          ) {
            return (
              <FoodMenu
                name={value.name}
                desc={value.desc}
                price={value.price}
                key={index}
                status={value.status}
                onClick={() => {
                  if (value.image === "") {
                    setIsShowModal(false);
                  } else {
                    setIsShowModal(true);
                    setImage(value.image);
                  }
                }}
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
