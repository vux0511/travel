import { FaRegStar } from "react-icons/fa";
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
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Detail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);
    const { idTour } = useParams();
    const [detailTour, setDetailTour] = useState([]);
    const [rating, setRating] = useState([]);
    const params = useParams();
    const notify = () => toast();
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [content, setContent] = useState("");

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

    const handleChangeFullName = (e) => {
        setFullName(e.target.value);
    };
    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };

    useEffect(() => {
        axios
            .get(`${URL.URL_getTourDetail}?idTour=${idTour}`)
            .then((response) => {
                setDetailTour(response.data);
            });
    }, []);

    useEffect(() => {
        axios.get(`${URL.URL_getRating}?idTour=${idTour}`).then((response) => {
            setRating(response.data);
        });
    }, []);

    const handlePostRating = (e) => {
        e.preventDefault();
        let data = {
            idTour: idTour,
            fullName: fullName,
            content: content,
        };
        axios
            .post(`${URL.URL_addRating}?idTour=${idTour}`, data)
            .then((response) => {
                if (response.data.status === "success") {
                    toast.success("Thêm đánh giá thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                } else {
                    toast.error("Thêm đánh giá thất bại", {
                        position: "top-right",
                        autoClose: 4000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            });
    };

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
                            <div key={index}>
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
                            </div>
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
                            <div key={index}>
                                <SwiperSlide>
                                    <img
                                        src={detailImage.imageTour1}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={detailImage.imageTour2}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={detailImage.imageTour3}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img
                                        src={detailImage.imageTour4}
                                        className="thumb__small"
                                    />
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>
                {detailTour.map((detailTour, index) => (
                    <div className="detail__info" key={index}>
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
                    <div className="tab-item">Đánh Giá</div>
                    <div className="linee" />
                </div>
                <div className="tab-content">
                    <div className="tab-pane active">
                        <p className="tab__title">HOẠT ĐỘNG NỔI BẬT</p>
                        {detailTour.map((detailTour, index) => (
                            <div className="tab__desc" key={index}>
                                <li>{parse(detailTour.descTour)}</li>
                            </div>
                        ))}
                    </div>
                    <div className="tab-pane">
                        <p className="tab__title">ĐÁNH GIÁ</p>
                        <div className="tab__rating">
                            <div className="tab__rating-list">
                                {rating.length !== 0 ? (
                                    rating.map((rating, index) => (
                                        <div
                                            className="tab__rating-item"
                                            key={index}
                                        >
                                            <img
                                                src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png"
                                                alt="avatar"
                                                className="tab__rating-avatar"
                                            />
                                            <div className="tab__rating-info">
                                                <div className="tab__rating-name">
                                                    {rating.fullName}
                                                </div>
                                                <div className="tab__rating-desc">
                                                    {rating.content}
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="tab__rating-empty">
                                        Không có đánh giá nào!
                                    </div>
                                )}
                            </div>
                            <div className="tab__rating-post">
                                <div className="tab__rating-header">
                                    <div className="tab__rating-title">
                                        Thêm Đánh Giá
                                    </div>
                                    <form
                                        action="#"
                                        onSubmit={handlePostRating}
                                        className="form__rating"
                                    >
                                        <label
                                            htmlFor="name"
                                            className="form__rating-label"
                                        >
                                            Tên Của Bạn
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            id="name"
                                            className="form__rating-input"
                                            placeholder="Nhập tên của bạn..."
                                            onChange={handleChangeFullName}
                                        />
                                        <label
                                            htmlFor="comment"
                                            className="form__rating-label"
                                        >
                                            Nhận Xét Của Bạn
                                        </label>
                                        <textarea
                                            required
                                            className="form__rating-input form__rating-large"
                                            id="comment"
                                            name="w3review"
                                            rows="4"
                                            cols="50"
                                            placeholder="Nhập nhận xét của bạn..."
                                            onChange={handleChangeContent}
                                        ></textarea>
                                        <button
                                            className="button-rating"
                                            // onClick={}
                                        >
                                            Đánh Giá
                                        </button>
                                        <ToastContainer />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Detail;
