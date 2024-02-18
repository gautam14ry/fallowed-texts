"use client";
import { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ArrowLeftIcon from "@/components/icons/arrow-left-icon";
import ArrowIcon from "@/components/icons/arrow-icon";
import Image from "next/image";

import "swiper/css";
import "./slider.scss";

const Slider = ({ data }: any) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={{
        nextEl: ".slider__nav--next",
        prevEl: ".slider__nav--prev",
      }}
      pagination={{
        el: ".slider__pagination",
        clickable: true,
      }}
      loop={true}
      spaceBetween={40}
      slidesPerView={1}
      className="slider"
    >
      <div className="slider__slides">
        {data.map((item: any) => (
          <SwiperSlide key={item._uid}>
            <div className="slider-card">
              <Image
                src={item.image.filename}
                alt={item.image.alt}
                className="slider-card__image"
                width={564}
                height={496}
                priority
              />
              <div className="slider-card__info">
                <h3 className="slider-card__title">{item.title}</h3>
                <p className="slider-card__description body-xl">
                  {item.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
      <div className="slider__controller">
        <div className="slider__nav slider__nav--prev">
          <ArrowLeftIcon />
        </div>
        <div className="slider__pagination"></div>
        <div className="slider__nav slider__nav--next">
          <ArrowIcon />
        </div>
      </div>
    </Swiper>
  );
};

export default Slider;
