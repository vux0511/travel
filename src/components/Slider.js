import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function Slider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
                            alt=""
                            class="slider__image"
                        />
                        <div class="image-data">
                            <span class="text">
                                Enjoy the finest coffee drinks.
                            </span>
                            <h2>
                                Enjoy Our Exclusive <br />
                                Coffee and Cocktails
                            </h2>
                            <a href="#" class="button">
                                Xem Thêm
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img
                            src="https://statics.vinpearl.com/vietnam-itinerary-1-month-04_1688648975.jpg"
                            alt=""
                            class="slider__image"
                        />
                        <div class="image-data">
                            <span class="text">
                                Enjoy the finest coffee drinks.
                            </span>
                            <h2>
                                Enjoy Our Exclusive <br />
                                Coffee and Cocktails
                            </h2>
                            <a href="#" class="button">
                                Xem Thêm
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="slide swiper-slide">
                        <img
                            src="https://www.originvietnam.com/wp-content/uploads/Danang_Travel_Guide_Header.jpg"
                            alt=""
                            class="slider__image"
                        />
                        <div class="image-data">
                            <span class="text">
                                Enjoy the finest coffee drinks.
                            </span>
                            <h2>
                                Enjoy Our Exclusive <br />
                                Coffee and Cocktails
                            </h2>
                            <a href="#" class="button">
                                Xem Thêm
                            </a>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Slider;
