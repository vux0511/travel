import { TbReceiptTax } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";

function Contact() {
    return (
        <div className="wrapper">
            <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=" Banner"
                className="teambuilding__banner"
            />

            <section className="container ">
                <div className="contact contact__wrapper">
                    <div className="contact__info">
                        <div className="contact__info-item">
                            <div className="contact__info-header">LIÊN HỆ</div>
                            <div className="contact__info-title">
                                CÔNG TY TNHH TMDV DU LỊCH DING DING
                            </div>
                            <div className="contact__info-desc">
                                Công ty cung cấp các dịch vụ tổ chức du lịch, sự
                                kiện, teambuilding, dịch vụ đặt vé máy bay trong
                                nước và quốc tế cho hàng nghìn lượt khách mỗi
                                năm
                            </div>
                            <div className="contact__info-bottom">
                                <div className="contact__info-bottom-item">
                                    <FaMapMarkerAlt /> L17-11, Tầng 17 Toà nhà
                                    Vincom Center Đồng Khởi, 72 Lê Thánh Tôn,
                                    Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí
                                    Minh, Việt Nam
                                </div>
                                <div className="contact__info-bottom-item">
                                    <FaPhone /> 0964655286
                                </div>
                                <div className="contact__info-bottom-item">
                                    <MdEmail /> dingding.info2018@gmail.com
                                </div>
                                <div className="contact__info-bottom-item">
                                    <TbReceiptTax /> Mã số thuế: 0314007782
                                </div>
                                <div className="contact__info-bottom-item">
                                    <GiWorld /> dingding.vn
                                </div>
                            </div>
                        </div>
                        <div className="contact__info-item">
                            <div className="contact__info-items">
                                <div className="contact__info-title">
                                    TƯ VẤN TOUR TRONG NƯỚC
                                </div>
                                <div className="contact__info-bottom">
                                    <div className="contact__info-bottom-item">
                                        <FaPhone /> 0964655286
                                    </div>
                                </div>
                            </div>
                            <div className="contact__info-items">
                                <div className="contact__info-title">
                                    TƯ VẤN TOUR NƯỚC NGOÀI
                                </div>
                                <div className="contact__info-bottom">
                                    <div className="contact__info-bottom-item">
                                        <FaPhone /> 0964655286
                                    </div>
                                </div>
                            </div>
                            <div className="contact__info-items">
                                <div className="contact__info-title">
                                    TƯ VẤN TOUR ĐẶT VÉ MÁY BAY
                                </div>
                                <div className="contact__info-bottom">
                                    <div className="contact__info-bottom-item">
                                        <FaPhone /> 0964655286
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;
