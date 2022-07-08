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
export const DrinkMenuContainer: React.FC<MenuContainer> = ({
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
            value.category === "drink" &&
            value.subCategory === subCategory &&
            value.status === "enable"
          ) {
            return (
              <DrinkMenu
                name={value.name}
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

        {data.map((value, index) => {
          if (
            value.category === "drink" &&
            value.subCategory === subCategory &&
            value.status === "disable"
          ) {
            return (
              <DrinkMenu
                name={value.name}
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
