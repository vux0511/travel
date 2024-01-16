import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../api/URL";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";
import { FiCheck } from "react-icons/fi";

function DetailNews() {
    const [detailTravelTicket, setDetailTravelTicket] = useState([]);
    const { idTravelTicket } = useParams();

    useEffect(() => {
        axios
            .get(
                `${URL.URL_getTravelTicketDetail}?idTravelTicket=${idTravelTicket}`
            )
            .then((response) => {
                setDetailTravelTicket(response.data);
            });
    }, []);

    return (
        <div className="container detailnews">
            {detailTravelTicket.map((detail, index) => (
                <div className="detailnews__info">
                    <div className="detailnews__title">
                        {detail.nameTravelTicket}
                    </div>
                    <div className="travelticket__detail">
                        <div className="detailnews__desc travelticket__detail-content">
                            <img
                                src={detail.imageTravelTicket}
                                alt=""
                                className="travelticket__detail-image"
                            />
                            <div className="travelticket__detail-title">
                                Thông tin dịch vụ
                            </div>
                            {parse(detail.contentTravelTicket)}
                        </div>
                        <div className="travelticket__detail-feature">
                            <div className="travelticket__detail-price">
                                Giá chỉ từ{" "}
                                {detail.priceTravelTicket
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                                đ đ
                            </div>
                            <a
                                href="https://www.facebook.com/messages/t/1848020962149796"
                                target="_blank"
                                className="travelticket__detail-button"
                            >
                                Đặt Ngay
                            </a>
                            <div className="travelticket__detail-info">
                                <p>
                                    <FiCheck className="travelticket__detail-icon" />
                                    Xác nhận đơn hàng tức thì
                                </p>
                                <p>
                                    <FiCheck className="travelticket__detail-icon" />
                                    Trình e-voucher để sử dụng dịch vụ
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <div className="detailnews__bottom">
                <div className="detailnews__bottom-title">DingDing Travel</div>
                <div className="detailnews__bottom-phone">
                    <FaPhone />
                    0964655286
                </div>
                <div className="detailnews__bottom-email">
                    <MdEmail />
                    dingding.info2018@gmail.com
                </div>
                <div className="detailnews__bottom-address">
                    <FaMapMarkerAlt />
                    L17-11, Tầng 17 toà nhà Vincom Center Đồng Khởi, 72 Lê Thánh
                    Tôn, Phường Bến Nghé, Quận 1 Thành phố Hồ Chí Minh
                </div>
                <div className="detailnews__bottom-fb">
                    <FaFacebook />
                    <a href="https://www.facebook.com/DingDingGo/">
                        Ding Ding Go
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DetailNews;
