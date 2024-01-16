import ToursCard from "./TourCard";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdTravelExplore } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdHealthAndSafety } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { LiaBrainSolid } from "react-icons/lia";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../api/URL";

function StudentExperiencePage() {
    const [tourFieldTrip, setTourFieldTrip] = useState([]);
    const [dataForm, setDataForm] = useState({});

    const handle = () => {};
    // Get Tours Field Trip
    useEffect(() => {
        axios.get(URL.URL_getTourFieldTrip).then((response) => {
            setTourFieldTrip(response.data);
        });
    }, []);

    return (
        <div className="wrapper">
            <img
                src="https://chapmantours.ca/images/travel-learn-discover-header.jpg"
                alt="Teambuilding Banner"
                className="teambuilding__banner"
            />
            <div className="container">
                <section className="container teambuilding">
                    <div className="visa__title visa__line teambuilding__title">
                        TOUR HỌC SINH SINH VIÊN - HOẠT ĐỘNG NGOẠI KHOÁ
                    </div>
                    <div className="teambuilding__desc">
                        <p>
                            FIELD TRIP là xu hướng học tập mới hiện nay được
                            DingDing travel phối hợp với các trường Đại học tổ
                            chức một cách chuyên nghiệp. Những buổi học ngoại
                            khóa, những buổi tham quan doanh nghiệp, dã ngoại
                            kết hợp kiến tập trải nghiệm tới những quốc gia tiên
                            tiến, có nền giáo dục phát triển góp phần tạo điều
                            kiện tới các em sinh viên không chỉ là tham quan du
                            lịch truyền thống mà còn có cơ hội tiếp xúc với môi
                            trường làm việc chuyên nghiệp, nghề nghiệp tương lai
                            sau khi tốt nghiệp. Bên cạnh đó, còn là cơ hội để
                            sinh viên khám phá, tìm hiểu và trải nghiệm văn hóa,
                            lịch sử, con người của một địa phương hay quốc gia
                            mới, rèn luyện kỹ năng giao tiếp, kết nối và phát
                            triển bản thân.
                        </p>
                        <p>
                            Kết hợp hoạt động team building nhẹ nhàng cũng giúp
                            các em giảm bớt áp lực học hành, thi cử. Để từ đó
                            tăng khả năng linh hoạt và tạo ra tinh thần đoàn kết
                            hơn cho các em.
                        </p>
                    </div>
                </section>
                <div className="visa__item teambuilding__advise studentexperience__advise">
                    <img
                        src="https://images.unsplash.com/photo-1542637297-1318423100cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="visa__image"
                    />
                    <div className="visa__info studentexperience__title">
                        <div className="visa__item-title visa__line">
                            TƯ VẤN TOUR HỌC SINH SINH VIÊN
                        </div>
                        <div className="visa__item-desc">
                            Dưới đây là gợi ý một số tour học sinh sinh viên hấp
                            dẫn. Ngoài ra, bạn và nhóm của mình vẫn có thể liên
                            hệ với chúng tôi để cùng xây dựng chuyến đi thiết kế
                            riêng, ở địa điểm mà bạn yêu thích, theo phong cách
                            và sở thích của bạn.
                        </div>
                        <a
                            href="https://www.facebook.com/messages/t/1848020962149796"
                            target="_blank"
                            className="visa__button-advise"
                        >
                            <button className="visa__button">
                                Liên Hệ Tư Vấn
                            </button>
                        </a>
                    </div>
                </div>
                <section className="container teambuilding ">
                    <div className="visa__title visa__line">
                        TỔ CHỨC TOUR KIẾN TẬP CHO HỌC SINH SINH VIÊN CÙNG
                        DINGDING TRAVEL
                    </div>
                    <div className="teambuilding__desc">
                        <p className="teambuilding__desc-content">
                            DingDing là đối tác tin cậy của các trường Đại Học,
                            các Khoa và bộ môn với nhiều kinh nghiệm kết nối, tổ
                            chức chương trình kiến tập cho sinh viên với chất
                            lượng cao và đa dạng nhóm ngành học. Chúng tôi tự
                            hào là đơn vị đã hợp tác thành công với nhiều tổ
                            chức doanh nghiệp, viện nghiên cứu và trường đại
                            học, tạo ra cơ hội học tập và trải nghiệm giữa sinh
                            viên và doanh nghiệp.
                        </p>
                    </div>
                    <div className="teambuilding__desc teambuilding__branch">
                        <div className="teambuilding__branch-item">
                            <p>
                                <span>1.</span>Nhóm ngành Tài Chính – Ngân Hàng
                            </p>
                            <p>
                                <span>2.</span>Nhóm ngành Kinh Tế - Kế Toán
                            </p>
                            <p>
                                <span>3.</span>Nhóm ngành Thông Tin{" "}
                            </p>
                        </div>
                        <div className="teambuilding__branch-item">
                            <p>
                                <span>4.</span>Nhóm ngành Quản trị kinh doanh –
                                Dịch vụ
                            </p>
                            <p>
                                <span>5.</span>Nhóm ngành Luật{" "}
                            </p>
                            <p>
                                <span>6.</span>Nhóm ngành Thời trang
                            </p>
                        </div>
                    </div>
                    <div className="chooseus__wrapper teambuilding__steps">
                        <div className="chooseus__item teambuilding__steps-item">
                            <IoChatbubblesSharp className="chooseus__icon teambuilding__steps-icon" />
                            <div className="chooseus__title teambuilding__steps-title">
                                1. Thảo luận nhu cầu, mong muốn của trường học
                            </div>
                            <div className="chooseus__desc teambuilding__steps-desc">
                                Trước khi bắt đầu tổ chức tour Field Trip,
                                DingDing sẽ tiến hành thảo luận với đại diện của
                                các Khoa để hiểu rõ nhu cầu, mong muốn của sinh
                                viên và giảng viên.
                            </div>
                        </div>
                        <div className="chooseus__item teambuilding__steps-item">
                            <MdTravelExplore className="chooseus__icon teambuilding__steps-icon" />
                            <div className="chooseus__title teambuilding__steps-title">
                                2. Lựa chọn địa điểm du lịch trải nghiệm phù hợp
                            </div>
                            <div className="chooseus__desc teambuilding__steps-desc">
                                Sau khi hiểu rõ nhu cầu, mong muốn, ngân sách
                                của từng Lớp, DingDing sẽ tư vấn địa điểm cũng
                                như những dịch vu phù hợp nhất với tour kiến
                                tập.
                            </div>
                        </div>
                        <div className="chooseus__item teambuilding__steps-item">
                            <LiaBrainSolid className="chooseus__icon teambuilding__steps-icon" />
                            <div className="chooseus__title teambuilding__steps-title">
                                3. Lên ý tưởng các hoạt động trải nghiệm trong
                                tour học sinh sinh viên
                            </div>
                            <div className="chooseus__desc teambuilding__steps-desc">
                                DingDing cũng đưa ra các gợi ý và kế hoạch chi
                                tiết để giúp trường học có thể quản lý và tổ
                                chức các hoạt động này một cách dễ dàng
                            </div>
                        </div>
                        <div className="chooseus__item teambuilding__steps-item">
                            <HiMiniUserGroup className="chooseus__icon teambuilding__steps-icon" />
                            <div className="chooseus__title teambuilding__steps-title">
                                4. Cung cấp phương tiện và đội ngũ hỗ trợ
                            </div>
                            <div className="chooseus__desc teambuilding__steps-desc">
                                DingDing & Events chuẩn bị, cung cấp các thiết
                                bị và phương tiện cần thiết : dụng cụ chơi các
                                trò chơi, thiết bị thể thao, phương tiện di
                                chuyển, âm thanh, ánh sáng và đội ngũ hướng dẫn
                                viên chuyên nghiệp, tận tâm
                            </div>
                        </div>
                        <div className="chooseus__item teambuilding__steps-item">
                            <MdHealthAndSafety className="chooseus__icon teambuilding__steps-icon" />
                            <div className="chooseus__title teambuilding__steps-title">
                                5. Đảm bảo an toàn và bảo hiểm
                            </div>
                            <div className="chooseus__desc teambuilding__steps-desc">
                                DingDing đảm bảo tất cả phương tiện di chuyển
                                được kiểm tra, bảo trì thường xuyên và tuân thủ
                                đầy đủ các quy định an toàn. Đồng thời, DingDing
                                cũng sẽ cung cấp các giải pháp bảo hiểm phù hợp
                                để quý khách hàng được bảo vệ trong trường hợp
                                có sự cố xảy ra.
                            </div>
                        </div>
                        <div className="chooseus__item teambuilding__steps-item">
                            <VscFeedback className="chooseus__icon teambuilding__steps-icon" />
                            <div className="chooseus__title teambuilding__steps-title">
                                6. Đánh giá và phản hồi
                            </div>
                            <div className="chooseus__desc teambuilding__steps-desc">
                                Sau mỗi tour Field Trip kết thúc, DingDing
                                Travel sẽ thực hiện đánh giá và thu thập phản
                                hồi từ quý thầy cô và các bạn sinh viên để hiểu
                                rõ những điểm tốt và điểm cần cải thiện trong
                                tour.
                            </div>
                        </div>
                    </div>
                </section>
                <div className="visa__title visa__line teambuilding__title studentexperience__title">
                    DANH SÁCH TOUR FIELD TRIP
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
                    {tourFieldTrip.map((tour, index) => (
                        <SwiperSlide key={index}>
                            <a href={`/detail-tour/idTour/${tour.idTour}`}>
                                <ToursCard tourCard={tour} />
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default StudentExperiencePage;
