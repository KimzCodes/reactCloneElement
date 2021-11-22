import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import '../swiper.css';
import React from 'react';

SwiperCore.use([Pagination, Navigation]);

const Carousel = ({ children, items, slidesPerView, navigation }) => {
  const slides = items.map((item) => (
    <SwiperSlide key={item.id}>
      {React.cloneElement(children, { key: item.id, item })}
    </SwiperSlide>
  ));

  return (
    <Swiper
      navigation={navigation ? navigation : false}
      slidesPerView={slidesPerView ? slidesPerView : '2'}
      spaceBetween={30}
    >
      {slides}
    </Swiper>
  );
};

export default Carousel;
