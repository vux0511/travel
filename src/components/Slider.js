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
                        <img
                            src="https://vietnamnomad.com/wp-content/uploads/2019/04/Da-Nang-travel-by-Vietnamnomad.jpg"
                            alt="Slider Image"
                            class="slider__image"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img
                            src="https://www.originvietnam.com/wp-content/uploads/Danang_Travel_Guide_Header.jpg"
                            alt="Slider Image"
                            class="slider__image"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img
                            src={Banner2}
                            alt="Slider Image"
                            class="slider__image"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img
                            src={Banner1}
                            alt="Slider Image"
                            class="slider__image"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
