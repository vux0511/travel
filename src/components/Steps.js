import SearchImage from "../assets/search.png";
import PayImage from "../assets/pay.png";
import TicketImage from "../assets/ticket.png";
import TravelImage from "../assets/travel.png";
import { TbMapSearch } from "react-icons/tb";
import { IoTicketOutline } from "react-icons/io5";
import { FaAmazonPay } from "react-icons/fa";
import { TbBeach } from "react-icons/tb";

function Steps() {
    return (
        <section className="wrapper wrapper__steps">
            <div className=" steps">
                <div className="steps__header">
                    <div className="steps__desc tours__desc">
                        VỚI 4 BƯỚC ĐƠN GIẢN
                    </div>
                    <div className="steps__title tours__header line">
                        Đặt Tour & Khách Sạn
                    </div>
                </div>
                <div className="steps__main">
                    <div className="steps__item">
                        <div className="overlay"></div>
                        <img
                            src="https://luxurytravel.vn/wp-content/uploads/2023/03/aodaihoian.jpg"
                            alt=""
                            className="steps__image"
                        />
                        <div className="steps__info">
                            <TbMapSearch className="steps__icon" />

                            <div className="steps__item-title">Tìm Kiếm</div>
                            <div className="steps__desc">
                                Tìm kiếm tour hoặc Gửi yêu cầu về chuyến đi của
                                bạn , địa điểm, sở thích, thời gian dự kiến bạn
                                muốn đi du lịch.
                            </div>
                        </div>
                    </div>
                    <div className="steps__item">
                        <div className="overlay"></div>
                        <img
                            src="https://luxurytravel.vn/wp-content/uploads/2023/08/luxurytravel_thailan1.jpg"
                            alt=""
                            className="steps__image"
                        />
                        <div className="steps__info">
                            <IoTicketOutline className="steps__icon" />

                            <div className="steps__item-title">Book Đặt</div>
                            <div className="steps__desc">
                                Book đặt tour / dịch vụ bạn đã chọn, gửi thông
                                tin cá nhân hoặc nhóm của bạn để chúng tôi chuẩn
                                bị dịch vụ cho bạn
                            </div>
                        </div>
                    </div>
                    <div className="steps__item">
                        <div className="overlay"></div>
                        <img
                            src="https://luxurytravel.vn/wp-content/uploads/2023/08/Grand-palace-and-Wat-phra-keaw-at-sunset-bangkok.jpg"
                            alt=""
                            className="steps__image"
                        />
                        <div className="steps__info">
                            <FaAmazonPay className="steps__icon" />

                            <div className="steps__item-title">Thanh Toán</div>
                            <div className="steps__desc">
                                Bạn thực hiện thanh toán để chúng tôi triển khai
                                dịch vụ cho kỳ nghĩ, chuyến đi của bạn theo yêu
                                cầu của nhân viên tư vấn của chúng tôi.
                            </div>
                        </div>
                    </div>
                    <div className="steps__item">
                        <div className="overlay"></div>
                        <img
                            src="https://luxurytravel.vn/wp-content/uploads/2023/03/cksfmvgz600691ao3i5tiobkt-198adadf-4349-42c2-b22e-5390b473f2db.full_.jpg"
                            alt=""
                            className="steps__image"
                        />
                        <div className="steps__info">
                            <TbBeach className="steps__icon" />
                            <div className="steps__item-title">
                                Tận Hưởng Kỳ Nghỉ
                            </div>
                            <div className="steps__desc">
                                Tận hưởng kỳ nghỉ của bạn mơ ước với tất cả sự
                                hào hứng và trút bỏ hết mọi nỗi lo phát sinh.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Steps;
