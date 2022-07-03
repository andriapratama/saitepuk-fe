import React from "react";
import { DrinkMenuContainer } from "../menu-container/drink-menu.container";
import { FoodMenuContainer } from "../menu-container/food-menu.container";

interface Data {
  id: number;
  name: string;
  desc: string;
  category: string;
  subCategory: string;
  price: number;
}

interface MenuLayout {
  menuValue: string;
  data: Data[];
}

export const MenuLayout: React.FC<MenuLayout> = ({ menuValue, data }) => {
  return (
    <>
      {menuValue === "all" ? (
        <>
          <FoodMenuContainer data={data} subCategory="main">
            Makanan
          </FoodMenuContainer>

          <FoodMenuContainer data={data} subCategory="mie">
            Mie
          </FoodMenuContainer>

          <FoodMenuContainer data={data} subCategory="snack">
            Snack
          </FoodMenuContainer>

          <DrinkMenuContainer data={data} subCategory="hot">
            Minuman Hangat
          </DrinkMenuContainer>

          <DrinkMenuContainer data={data} subCategory="ice">
            Minuman Dingin
          </DrinkMenuContainer>

          <DrinkMenuContainer data={data} subCategory="bottle">
            Minuman Botol
          </DrinkMenuContainer>
        </>
      ) : menuValue === "food" ? (
        <>
          <FoodMenuContainer data={data} subCategory="main">
            Makanan
          </FoodMenuContainer>

          <FoodMenuContainer data={data} subCategory="mie">
            Mie
          </FoodMenuContainer>

          <FoodMenuContainer data={data} subCategory="snack">
            Snack
          </FoodMenuContainer>
        </>
      ) : menuValue === "drink" ? (
        <>
          <DrinkMenuContainer data={data} subCategory="hot">
            Minuman Hangat
          </DrinkMenuContainer>

          <DrinkMenuContainer data={data} subCategory="ice">
            Minuman Dingin
          </DrinkMenuContainer>

          <DrinkMenuContainer data={data} subCategory="bottle">
            Minuman Botol
          </DrinkMenuContainer>
        </>
      ) : null}
    </>
  );
};
