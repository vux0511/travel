import { FaHandshakeSimple } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

function Detail() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);

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
                        <SwiperSlide>
                            <img
                                src="https://vcdn1-dulich.vnecdn.net/2022/03/31/thac-Ban-Gioc-Cao-Bang-8614-1648729935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=14zFbBkd6hgbDfwOrjQPyQ"
                                className="thumb__main"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/ef/c6/68.jpg"
                                className="thumb__main"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://mediaim.expedia.com/destination/1/0021019b5bcd9a4f74eca46eb2862068.jpg"
                                className="thumb__main"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://saigonbangiocresort.com/wp-content/uploads/2019/07/cao-bang.jpg"
                                className="thumb__main"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://4.bp.blogspot.com/-8zzr40jU-48/W3FcfFrJMsI/AAAAAAAABnI/z2nUjBudqasuFM27-4P7eVVDe8FK_Lv5ACLcBGAs/s1600/Nui%2Bmat%2Bthan.jpg"
                                className="thumb__main"
                            />
                        </SwiperSlide>
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
                        <SwiperSlide>
                            <img
                                src="https://vcdn1-dulich.vnecdn.net/2022/03/31/thac-Ban-Gioc-Cao-Bang-8614-1648729935.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=14zFbBkd6hgbDfwOrjQPyQ"
                                className="thumb__small"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/ef/c6/68.jpg"
                                className="thumb__small"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://mediaim.expedia.com/destination/1/0021019b5bcd9a4f74eca46eb2862068.jpg"
                                className="thumb__small"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://saigonbangiocresort.com/wp-content/uploads/2019/07/cao-bang.jpg"
                                className="thumb__small"
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://4.bp.blogspot.com/-8zzr40jU-48/W3FcfFrJMsI/AAAAAAAABnI/z2nUjBudqasuFM27-4P7eVVDe8FK_Lv5ACLcBGAs/s1600/Nui%2Bmat%2Bthan.jpg"
                                className="thumb__small"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="detail__info">
                    <div className="detail__name">
                        Tour Cao Bằng – Pác Bó – Bản Giốc – Ngườm Ngao – Núi Mắt
                        Thần
                    </div>
                    <div className="detail__day">
                        Thời gian: <span> 3 ngày</span>
                    </div>
                    <div className="detail__vehicle">
                        Phương tiện: <span>Ô tô</span>
                    </div>
                    <div className="detail__price">
                        Giá: <span>2.345.678đ</span>
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
                            Hãy luôn chung tay bảo vệ thiên nhiên, môi trường,
                            tiết kiệm điện, nhiên liệu, hạn chế phương tiện gây
                            ô nhiễm…
                        </p>
                        <p>
                            <FaArrowRightLong className="detail__info-icon" /> Ý
                            thức tôn trọng không gian chung, ...
                        </p>
                        <p>
                            <FaArrowRightLong className="detail__info-icon" />{" "}
                            Hãy tôn trọng, trân quý sự đa dạng văn hóa tộc
                            người, vùng miền, phong tục, tính cách… tôn trọng di
                            tích lịch sử, trân quý những giá trị cũ làm nên bản
                            sắc điểm đến
                        </p>
                    </div>
                </div>
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
                        <div className="tab__desc">
                            <li>
                                Thăm Núi Thủng (Núi Mắt thần) - một điểm du lịch
                                mới tuyệt đẹp tại Trà Lĩnh Cao Bằng
                            </li>
                            <li>
                                Thăm di tích Pác Bó với dòng suối trong như ngọc
                                và chụp hình cột mốc km0 đường Hồ Chí Minh
                            </li>
                            <li>
                                Thăm thác nước lớn thứ 4 trong 10 thác nước lớn
                                nhất trên thế giới nằm giữa đường biên hai quốc
                                gia
                            </li>
                            <li>
                                Khám phá Hồ Ba Bể - một trong 100 hồ nước ngọt
                                trên núi lớn nhất thế giới
                            </li>
                            <li>
                                Khám phá đời sống và văn hóa ẩm thực của đồng
                                bào dân tộc Tày, Nùng...
                            </li>
                            <li>
                                Khởi hành ngay cả khi chỉ có 02 khách đăng ký đi
                                tour
                            </li>
                        </div>
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
