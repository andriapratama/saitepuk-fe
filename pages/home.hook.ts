import { useState } from "react";

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
}

interface ScrollTo {
  to: number;
  behavior: string;
}
export const useHome = () => {
  const menu: Menu[] = [
    { value: "all", name: "Semua" },
    { value: "food", name: "Makanan" },
    { value: "drink", name: "Minuman" },
  ];

  const data: Data[] = [
    {
      id: 1,
      name: "Ayam Bakar Bumbu Rica-Rica",
      desc: "(Ayam + Bumbu + Nasi)",
      category: "food",
      subCategory: "main",
      price: 25000,
    },
    {
      id: 2,
      name: "Tipat Cantok Lengkap",
      desc: "(Tipat + Bumbu + Telur)",
      category: "food",
      subCategory: "main",
      price: 10000,
    },
    {
      id: 3,
      name: "Lalapan Ayam",
      desc: "(Ayam + Bumbu + Nasi)",
      category: "food",
      subCategory: "main",
      price: 15000,
    },
    {
      id: 4,
      name: "Nasi Goreng",
      desc: "(Nasi + Telur ceplok)",
      category: "food",
      subCategory: "main",
      price: 15500,
    },
    {
      id: 5,
      name: "Mie Goreng",
      desc: "(Mie goreng + Sayur + Telur)",
      category: "food",
      subCategory: "mie",
      price: 8000,
    },
    {
      id: 6,
      name: "Mie Kuah",
      desc: "(Mie kuah + Sayur + Telur)",
      category: "food",
      subCategory: "mie",
      price: 8000,
    },
    {
      id: 7,
      name: "Mie Goreng Komplit",
      desc: "(Mie goreng + Sayur + Telur + Tipat)",
      category: "food",
      subCategory: "mie",
      price: 10000,
    },
    {
      id: 8,
      name: "Mie Kuah Komplit",
      desc: "(Mie kuah + Sayur + Telur + Tipat)",
      category: "food",
      subCategory: "mie",
      price: 10000,
    },
    {
      id: 9,
      name: "Kentang",
      desc: "(Kentang + Saos)",
      category: "food",
      subCategory: "snack",
      price: 5000,
    },
    {
      id: 10,
      name: "Pisang Goreng",
      desc: "(Pisang goreng + Keju)",
      category: "food",
      subCategory: "snack",
      price: 5000,
    },
    {
      id: 11,
      name: "Pisang Goreng Komplit",
      desc: "(Pisang goreng + Keju + Susu kental manis)",
      category: "food",
      subCategory: "snack",
      price: 8000,
    },
    {
      id: 12,
      name: "Rujak",
      desc: "(Buah + Bumbu)",
      category: "food",
      subCategory: "snack",
      price: 5000,
    },
    {
      id: 13,
      name: "Kopi Bali",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 3000,
    },
    {
      id: 14,
      name: "Es Teh",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 3000,
    },
    {
      id: 15,
      name: "Kopi Saset",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 5000,
    },
    {
      id: 16,
      name: "Wedang Jahe",
      desc: "",
      category: "drink",
      subCategory: "hot",
      price: 5000,
    },
    {
      id: 17,
      name: "Capuchino",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 6000,
    },
    {
      id: 18,
      name: "Capchin",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 7000,
    },
    {
      id: 19,
      name: "Es Teh",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 3000,
    },
    {
      id: 20,
      name: "Aneka Jus",
      desc: "",
      category: "drink",
      subCategory: "ice",
      price: 5000,
    },
    {
      id: 21,
      name: "Pocary",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 5000,
    },
    {
      id: 22,
      name: "Teh Botol",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 5000,
    },
    {
      id: 23,
      name: "Beer",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 22000,
    },
    {
      id: 24,
      name: "Coctail",
      desc: "",
      category: "drink",
      subCategory: "bottle",
      price: 25000,
    },
  ];

  const scrollTop = () => {
    window.scrollTo({
      to: 0,
      behavior: "smooth",
    });
  };

  const [menuValue, setMenuValue] = useState<string>("all");

  return { menu, data, menuValue, setMenuValue };
};
