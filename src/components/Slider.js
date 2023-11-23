import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Banner1 from "../assets/Banner1.jpeg";
import Banner2 from "../assets/Banner2.jpeg";

function Slider() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                    className: "nav-btn",
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img src={Banner2} alt="" class="slider__image" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img src={Banner1} alt="" class="slider__image" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
