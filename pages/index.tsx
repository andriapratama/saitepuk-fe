import type { NextPage } from "next";
import React from "react";
import { ButtonMenu } from "../components/button";
import { useHome } from "../hooks/home-hook";
import { Hero } from "../components/hero";
import { MenuLayout } from "../components/menu-layout";
import { Footer } from "../components/footer";
import Head from "next/head";
import { NotificationModal } from "../components/modal/notification.modal";

const Home: NextPage = () => {
  const {
    menu,
    data,
    menuValue,
    setMenuValue,
    isShowModalNotif,
    setIsShowModalNotif,
  } = useHome();

  const handleClick = (value: string) => {
    setMenuValue(value);
  };

  return (
    <>
      <Head>
        <title>Warung Sai Tepuk</title>
      </Head>

      <div className="w-full">
        <NotificationModal
          isShowModal={isShowModalNotif}
          setIsShowModal={setIsShowModalNotif}
        />

        <Hero />

        <div className="w-full bg-slate-200 p-5">
          <div className="mb-5 flex w-full justify-between">
            {menu.map((value, index) => {
              return (
                <ButtonMenu
                  key={index}
                  onClick={() => handleClick(value.value)}
                >
                  {value.name}
                </ButtonMenu>
              );
            })}
          </div>

          <MenuLayout menuValue={menuValue} data={data} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
