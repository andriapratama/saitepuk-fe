import React, { useState } from "react";
import { DrinkMenuContainer } from "../menu-container/drink-menu.container";
import { FoodMenuContainer } from "../menu-container/food-menu.container";
import { Modal } from "../modal";

interface Data {
  id: number;
  name: string;
  desc: string;
  category: string;
  subCategory: string;
  price: number;
  image: string;
}

interface MenuLayout {
  menuValue: string;
  data: Data[];
}

export const MenuLayout: React.FC<MenuLayout> = ({ menuValue, data }) => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");

  return (
    <>
      <Modal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        image={image}
        setImage={setImage}
      />

      {menuValue === "all" ? (
        <>
          <FoodMenuContainer
            data={data}
            subCategory="main"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Makanan
          </FoodMenuContainer>

          <FoodMenuContainer
            data={data}
            subCategory="mie"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Mie
          </FoodMenuContainer>

          <FoodMenuContainer
            data={data}
            subCategory="snack"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Snack
          </FoodMenuContainer>

          <DrinkMenuContainer
            data={data}
            subCategory="hot"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Minuman Hangat
          </DrinkMenuContainer>

          <DrinkMenuContainer
            data={data}
            subCategory="ice"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Minuman Dingin
          </DrinkMenuContainer>

          <DrinkMenuContainer
            data={data}
            subCategory="bottle"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Minuman Botol
          </DrinkMenuContainer>
        </>
      ) : menuValue === "food" ? (
        <>
          <FoodMenuContainer
            data={data}
            subCategory="main"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Makanan
          </FoodMenuContainer>

          <FoodMenuContainer
            data={data}
            subCategory="mie"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Mie
          </FoodMenuContainer>

          <FoodMenuContainer
            data={data}
            subCategory="snack"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Snack
          </FoodMenuContainer>
        </>
      ) : menuValue === "drink" ? (
        <>
          <DrinkMenuContainer
            data={data}
            subCategory="hot"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Minuman Hangat
          </DrinkMenuContainer>

          <DrinkMenuContainer
            data={data}
            subCategory="ice"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Minuman Dingin
          </DrinkMenuContainer>

          <DrinkMenuContainer
            data={data}
            subCategory="bottle"
            setIsShowModal={setIsShowModal}
            setImage={setImage}
          >
            Minuman Botol
          </DrinkMenuContainer>
        </>
      ) : null}
    </>
  );
};
