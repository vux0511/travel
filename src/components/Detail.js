import { FaHandshakeSimple } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import URL from "../api/URL";
import axios from "axios";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

function Detail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const { idTour } = useParams();
    const [detailTour, setDetailTour] = useState([]);
    const params = useParams();

    const tabs = $$(".tab-item");
    const panes = $$(".tab-pane");
    const tabActive = $(".tab-item.active");
    tabs.forEach((tab, index) => {
        const pane = panes[index];

        tab.onclick = function () {
            $(".tab-item.active").classList.remove("active");
            $(".tab-pane.active").classList.remove("active");

            this.classList.add("active");
            pane.classList.add("active");
        };
    });

    useEffect(() => {
        axios
            .get(`${URL.URL_getTourDetail}?idTour=${idTour}`)
            .then((response) => {
                setDetailTour(response.data);
                console.log(response.data);
                console.log(detailTour);
            });
    }, []);

    return (
        <>
            <div className="container detail">
                <div className="detail__thumb">
                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={10}
                        navigation={true}
                        loop="true"
                        thumbs={{
                            swiper:
                                thumbsSwiper && !thumbsSwiper.destroyed
                                    ? thumbsSwiper
                                    : null,
                        }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {detailTour.map((detail, index) => (
                            <>
                                <SwiperSlide>
                                    <img
                                        src={detail.imageTour1}
                                        className="thumb__main"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={detail.imageTour2}
                                        className="thumb__main"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={detail.imageTour3}
                                        className="thumb__main"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={detail.imageTour4}
                                        className="thumb__main"
                                    />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {detailTour.map((detailImage, index) => (
                            <>
                                <SwiperSlide key={index}>
                                    <img
                                        src={detailImage.imageTour1}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                                <SwiperSlide key={index}>
                                    <img
                                        src={detailImage.imageTour2}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                                <SwiperSlide key={index}>
                                    <img
                                        src={detailImage.imageTour3}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                                <SwiperSlide key={index}>
                                    <img
                                        src={detailImage.imageTour4}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                </div>
                {detailTour.map((detailTour, index) => (
                    <div className="detail__info">
                        <div className="detail__name">
                            {detailTour.nameTour}
                        </div>
                        <div className="detail__day">
                            Thời gian: <span> {detailTour.dayTour}</span>
                        </div>
                        <div className="detail__vehicle">
                            Phương tiện: <span> {detailTour.vehicleTour}</span>
                        </div>
                        <div className="detail__price">
                            Giá: <span> {detailTour.priceTour}</span>
                        </div>
                        <a
                            href="https://www.facebook.com/messages/t/1848020962149796"
                            target="_blank"
                        >
                            <button className="button button-book">
                                Đặt Ngay <FaArrowRightLong />
                            </button>
                        </a>
                        <div className="detail__info-title">
                            <FaHandshakeSimple />
                            DU LỊCH CÓ TRÁCH NHIỆM
                        </div>
                        <div className="detail__info-desc">
                            <p>
                                <FaArrowRightLong className="detail__info-icon" />{" "}
                                Hãy luôn chung tay bảo vệ thiên nhiên, môi
                                trường, tiết kiệm điện, nhiên liệu, hạn chế
                                phương tiện gây ô nhiễm…
                            </p>
                            <p>
                                <FaArrowRightLong className="detail__info-icon" />{" "}
                                Ý thức tôn trọng không gian chung, ...
                            </p>
                            <p>
                                <FaArrowRightLong className="detail__info-icon" />{" "}
                                Hãy tôn trọng, trân quý sự đa dạng văn hóa tộc
                                người, vùng miền, phong tục, tính cách… tôn
                                trọng di tích lịch sử, trân quý những giá trị cũ
                                làm nên bản sắc điểm đến
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container tab__container">
                <div className="tabs">
                    <div className="tab-item active">Giới Thiệu</div>
                    {/* <div className="tab-item">Đánh Giá</div> */}
                    <div className="linee" />
                </div>
                <div className="tab-content">
                    <div className="tab-pane active">
                        <p className="tab__title">HOẠT ĐỘNG NỔI BẬT</p>
                        {detailTour.map((detailTour, index) => (
                            <div className="tab__desc">
                                <li>{parse(detailTour.descTour)}</li>
                            </div>
                        ))}
                    </div>
                    {/* <div className="tab-pane">
                        <p className="tab__title">ĐÁNH GIÁ</p>
                        <p>...</p>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default Detail;
