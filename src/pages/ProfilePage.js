import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Feedback from "../components/Feedback";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ProfilePage() {
    return (
        <>
            <Header />
            <Profile />
            <div className="container">
                <div className="visa__title visa__line teambuilding__title">
                    ĐÁNH GIÁ KHÁCH HÀNG
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
                    <SwiperSlide>
                        <Feedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Feedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Feedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Feedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Feedback />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Feedback />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage;
