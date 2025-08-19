import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";
export default function Slider({
  children,
  breakpoints,
  spaceBetween,
  className,
  slidesPerView,
  style
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      breakpoints={breakpoints}
      className={className}
      slidesPerView={slidesPerView}
      loop={true}
      style={style}
    >
      {children.map((html) => {
        return <SwiperSlide>{html}</SwiperSlide>;
      })}
    </Swiper>
  );
}
