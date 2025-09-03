import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css/bundle";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import rbpmApp1 from "../../assets/images/projects/rbpmApp/rbpm1.png";
import rbpmApp2 from "../../assets/images/projects/rbpmApp/rbpm2.png";
import rbpmApp3 from "../../assets/images/projects/rbpmApp/rbpm3.png";

export const SwiperCarousel = () => {
  return (
    <Swiper
      pagination={{
        type: "fraction",
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={rbpmApp1} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rbpmApp2} />
      </SwiperSlide>
      <SwiperSlide>
        <img src={rbpmApp3} />
      </SwiperSlide>
    </Swiper>
  );
};
