import ToursCard from "./TourCard";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function Tours({ title, desc }) {
    return (
        <div className="container">
            <div className="tours">
                <div className="tours__desc">{desc}</div>
                <div className="tours__header line">{title}</div>
                <div className="tours__wrapper"></div>
            </div>
            <Swiper
                navigation={true}
                pagination={true}
                slidesPerView={3}
                spaceBetween={30}
                loop="true"
                modules={[Navigation, Pagination]}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                <SwiperSlide>
                    <ToursCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ToursCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ToursCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ToursCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ToursCard />
                </SwiperSlide>
                <SwiperSlide>
                    <ToursCard />
                </SwiperSlide>
            </Swiper>
            <button className="button button-primary">
                Xem Thêm <FaArrowRightLong />
            </button>
        </div>
    );
}

export default Tours;
