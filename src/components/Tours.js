import ToursCard from "./TourCard";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

function Tours({ title, desc, topTours, newTours }) {
    return (
        <div className="container">
            <div className="tours">
                <div className="tours__desc">{desc}</div>
                <div className="tours__header line">{title}</div>
                <div className="tours__wrapper"></div>
            </div>
            <Swiper
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                pagination={true}
                slidesPerView={3}
                spaceBetween={30}
                loop="true"
                modules={[Autoplay, Pagination, Navigation]}
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
                {topTours.map((tour, index) => (
                    <SwiperSlide key={index}>
                        <a href={`/detail-tour/idTour/${tour.idTour}`}>
                            <ToursCard tourCard={tour} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
            <a href="/tour-trong-nuoc/category/1">
                <button className="button button-primary">
                    Xem Thêm <FaArrowRightLong />
                </button>
            </a>
        </div>
    );
}

export default Tours;
