import { useEffect, useState } from "react";

interface Menu {
  value: string;
  name: string;
}

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

export const useHome = () => {
  const menu: Menu[] = [
    { value: "food", name: "Makanan" },
    { value: "drink", name: "Minuman" },
    { value: "all", name: "Semua" },
  ];

  const data: Data[] = [
    {
      id: 1,
      name: "Ayam Bakar Bumbu Rica-Rica",
      desc: "(Ayam + Bumbu + Nasi)",
      category: "food",
      subCategory: "main",
      price: 25000,
      image: "5fec5602f116e.jpeg",
      status: "disable",
    },
    {
      id: 2,
      name: "Tipat Cantok Lengkap",
      desc: "(Tipat + Bumbu + Telur)",
      category: "food",
      subCategory: "main",
      price: 10000,
      image: "tipat-cantok.jpeg",
      status: "disable",
    },
    {
      id: 3,
      name: "Lalapan Ayam",
      desc: "(Ayam + Bumbu + Nasi)",
      category: "food",
      subCategory: "main",
      price: 15000,
      image: "lalapan-ayam.jpeg",
      status: "disable",
    },
    {
      id: 4,
      name: "Nasi Goreng",
      desc: "(Nasi + Telur ceplok)",
      category: "food",
      subCategory: "main",
      price: 15500,
      image: "nasi-goreng.webp",
      status: "enable",
    },
    {
      id: 5,
      name: "Mie Goreng",
      desc: "(Mie goreng + Sayur + Telur)",
      category: "food",
      subCategory: "mie",
      price: 8000,
      image: "mie-goreng.jpeg",
      status: "disable",
    },
    {
      id: 6,
      name: "Mie Kuah",
      desc: "(Mie kuah + Sayur + Telur)",
      category: "food",
      subCategory: "mie",
      price: 8000,
      image: "mie-kuah.webp",
      status: "disable",
    },
    {
      id: 7,
      name: "Mie Goreng Komplit",
      desc: "(Mie goreng + Sayur + Telur + Tipat)",
      category: "food",
      subCategory: "mie",
      price: 10000,
      image: "mie-goreng-komplit.jpeg",
      status: "disable",
    },
    {
      id: 8,
      name: "Mie Kuah Komplit",
      desc: "(Mie kuah + Sayur + Telur + Tipat)",
      category: "food",
      subCategory: "mie",
      price: 10000,
      image: "mie-kuah-komplit.jpeg",
      status: "disable",
    },
    {
      id: 9,
      name: "Kentang",
      desc: "(Kentang + Saos)",
      category: "food",
      subCategory: "snack",
      price: 5000,
      image: "kentang.jpeg",
      status: "disable",
    },
    {
      id: 10,
      name: "Pisang Goreng",
      desc: "(Pisang goreng + Keju)",
      category: "food",
      subCategory: "snack",
      price: 5000,
      image: "pisang-goreng.jpeg",
      status: "disable",
    },
    {
      id: 11,
      name: "Pisang Goreng Komplit",
      desc: "(Pisang goreng + Keju + Susu kental manis)",
      category: "food",
      subCategory: "snack",
      price: 8000,
      image: "",
      status: "disable",
    },
    {
      id: 12,
      name: "Rujak",
      desc: "(Buah + Bumbu)",
      category: "food",
      subCategory: "snack",
      price: 5000,
      image: "",
      status: "disable",
    },
    {
      id: 13,
      name: "Kopi Bali",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 3000,
      image: "",
      status: "disable",
    },
    {
      id: 14,
      name: "Kopi Tubruk",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 3000,
      image: "",
      status: "disable",
    },
    {
      id: 15,
      name: "Kopi Saset",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 5000,
      image: "",
      status: "disable",
    },
    {
      id: 16,
      name: "Wedang Jahe",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 5000,
      image: "",
      status: "disable",
    },
    {
      id: 17,
      name: "Capuchino",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 6000,
      image: "",
      status: "disable",
    },
    {
      id: 18,
      name: "Capchin",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 7000,
      image: "",
      status: "disable",
    },
    {
      id: 19,
      name: "Es Teh",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 3000,
      image: "",
      status: "disable",
    },
    {
      id: 20,
      name: "Aneka Jus",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 5000,
      image: "",
      status: "enable",
    },
    {
      id: 21,
      name: "Pocary",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 5000,
      image: "",
      status: "disable",
    },
    {
      id: 22,
      name: "Teh Botol",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 5000,
      image: "",
      status: "disable",
    },
    {
      id: 23,
      name: "Beer",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 22000,
      image: "",
      status: "disable",
    },
    {
      id: 24,
      name: "Coctail",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 25000,
      image: "",
      status: "disable",
    },
  ];

  const [menuValue, setMenuValue] = useState<string>("food");
  const [isShowModalNotif, setIsShowModalNotif] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowModalNotif(true);
    }, 10000);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isShowModalNotif === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isShowModalNotif]);

  return {
    menu,
    data,
    menuValue,
    setMenuValue,
    isShowModalNotif,
    setIsShowModalNotif,
  };
};
