import React from "react";
import Slider from "react-slick";
import { useHome } from "../../hooks/home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Gallery = () => {
  const { data } = useHome();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <>
      <div className="mb-5 w-full text-center">
        <p className="font-arima text-4xl">Gallery</p>
      </div>
      <div className="mb-10 flex w-full justify-center">
        <div className="w-[90%]">
          <Slider {...settings}>
            {data.map((value, index) => {
              if (!value.image) return null;
              return (
                <div className="px-1" key={index}>
                  <img
                    className="h-auto w-full rounded"
                    src={`/images/${value.image}`}
                    alt="nasi"
                  />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
};
