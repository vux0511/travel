import Header from "../components/Header";
import Footer from "../components/Footer";
import Profile from "../components/Profile";
import Feedback from "../components/Feedback";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function ProfilePage() {
    const arrayFeedback = [
        {
            name: "Thầy Trần Nam Dũng",
            position: "Phó Hiệu Trưởng Trường Phổ Thông Năng Khiếu",
            avt: "https://i.imgur.com/y9NSIGA.jpg",
            img: "https://i.imgur.com/SUGGseN.jpg",
        },
        {
            name: "Anh Nguyễn Đăng Khoa",
            position: "Phó Giám Đốc ngân hàng ACB - Cụm Sài Gòn",
            avt: "https://i.imgur.com/jRppf8Y.jpg",
            img: "https://i.imgur.com/YMpftI3.jpg",
        },
        {
            name: "Thầy Lợi Minh Thanh",
            position: "Cố vấn học tập lớp K19405C kiến tập Phú Quốc",
            avt: "https://i.imgur.com/rTeiL33.jpg",
            img: "https://i.imgur.com/IlwwiYl.jpg",
        },
        {
            name: "Bạn Nguyễn Phúc Nguyên",
            position: "Lớp trưởng lớp K20405C kiến tập Phú Quốc",
            avt: "https://i.imgur.com/CAxBN3L.jpg",
            img: "https://i.imgur.com/hLWt44Q.jpg",
        },
        {
            name: "Thầy Nguyễn Chí Hải",
            position:
                "Trưởng khoa Kinh Tế trường ĐH Kinh Tế - Luật phản hồi tour Phú Quốc của khoa",
            avt: "https://i.imgur.com/t8AxdqH.jpg",
            img: "https://i.imgur.com/POv0eYj.jpg",
        },
        {
            name: "Giáo Sư Nguyễn Thị Cành",
            position:
                "Cố Vấn trường Đại Học Kinh Tế - Luật phản hồi tour Đông Bắc",
            avt: "https://i.imgur.com/wq7B0N1.jpg",
            img: "https://i.imgur.com/nDNfX12.jpg",
        },
        {
            name: "Thầy Lê Tuấn Lộc",
            position:
                "Bí Thư Đảng Uỷ trường Đại Học Kinh Tế Luật phản hồi tour của DingDing travel",
            avt: "https://i.imgur.com/ZfAWMLM.jpg",
            img: "https://i.imgur.com/mVXQrOq.jpg",
        },
        {
            name: "Anh Hoàng Xuân Vũ",
            position:
                "Kế Toán trưởng Trường Phổ Thông Năng Khiếu phản hồi tour Hồ Tràm",
            avt: "https://i.imgur.com/qrXgiEt.jpg",
            img: "https://i.imgur.com/FUbbBNF.jpg",
        },
        {
            name: "Tiến sĩ Phạm Mỹ Duyên",
            position:
                "Cố Vấn Học Tập lớp K21403C phản hồi tour Đà Lạt do DingDing tổ chức",
            avt: "https://i.imgur.com/DlZ3HtR.jpg",
            img: "https://i.imgur.com/UT4nOR7.jpg",
        },
        {
            name: "Cô Trần Thị Ánh",
            position: "Cố Vấn học tập lớp K20411 C kiến tập Đà Nẵng",
            avt: "https://i.imgur.com/WUEAkNw.jpg",
            img: "https://i.imgur.com/RFaFYJp.jpg",
        },
        {
            name: "Tiến sĩ Nguyễn Thị Thu Trang",
            position: "Cố vấn học tập lớp K20403C",
            avt: "https://i.imgur.com/n08IFAY.jpg",
            img: "https://i.imgur.com/RJT285R.jpg",
        },
    ];

    useEffect(() => {
        document.title = "HỒ SƠ NĂNG LỰC";
    }, []);

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
                    {arrayFeedback.map((feedback, index) => (
                        <SwiperSlide key={index}>
                            <Feedback feedback={feedback} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Footer />
        </>
    );
}

export default ProfilePage;
