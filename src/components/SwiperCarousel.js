import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import '../swiper.css';

SwiperCore.use([Pagination, Navigation]);

const SwiperCarousel = ({ children, items }) => {
  const slide = items.map((item) => (
    <SwiperSlide key={item.id}>
      {React.cloneElement(children, { key: item.id, item })}
    </SwiperSlide>
  ));
  return (
    <Swiper spaceBetween={30} slidesPerView={3} navigation pagination>
      {slide}
    </Swiper>
  );
};

export default SwiperCarousel;
