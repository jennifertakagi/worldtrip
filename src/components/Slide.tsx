import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { SlideItem } from "./SlideItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function Slide() {
  return (
    <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      style={{width: "100%", flex: "1", height: "100%"}}
    >
      <SwiperSlide>
        <SlideItem 
          title="Africa"
          description="The most colorful continent"
          link="africa"
          imageUrl="/images/slider/africa.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title="Asia"
          description="The most populous continent"
          link="asia"
          imageUrl="/images/slider/asia.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title="Europe"
          description="The oldest continent"
          link="europe"
          imageUrl="/images/slider/europe.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title="North America"
          description="The most technological continent"
          link="north-america"
          imageUrl="/images/slider/north-america.jpg"
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideItem 
          title="Oceania"
          description="The most peculiar continent"
          link="oceania"
          imageUrl="/images/slider/oceania.jpg"
        />
      </SwiperSlide>


      <SwiperSlide>
        <SlideItem 
          title="South America"
          description="The warm continent"
          link="south-america"
          imageUrl="/images/slider/south-america.jpg"
        />
      </SwiperSlide>
    </Swiper>
  )
}