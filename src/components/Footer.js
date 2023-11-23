import Logo from "../assets/logo-main.jpeg";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    return (
        <section className="wrapper wrapper__footer">
            <div className="container footer">
                <div className="footer__item">
                    <img src={Logo} alt="" className="footer__logo" />
                    <div className="footer__desc line">
                        DingDing là một Công ty với gần 10 năm kinh nghiệm về
                        các lĩnh vực vận tải, du thuyền, du lịch, nhà hàng,
                        khách sạn.
                    </div>
                    <div className="footer__contact">
                        <div className="footer__map">
                            <FaMapLocation className="footer__icon" /> L17-11,
                            Tầng 17 toà nhà Vincom Center Đồng Khởi, 72 Lê Thánh
                            Tôn, Phường Bến Nghé, Quận 1 Thành phố Hồ Chí Minh
                        </div>
                        <div className="footer__phone">
                            <FaPhoneAlt className="footer__icon" /> 0914134626
                        </div>
                        <div className="footer__email">
                            <MdEmail className="footer__icon" />{" "}
                            sales@dingding.vn
                        </div>
                    </div>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-menu">
                        <li className="footer__item-link footer__title">
                            Tour Trong Nước
                        </li>
                        <li className="footer__item-link">Tour Miền Bắc</li>
                        <li className="footer__item-link">
                            Tour Di Sản Miền Trung
                        </li>
                        <li className="footer__item-link">Tour Miền Nam</li>
                        <li className="footer__item-link">
                            Tour Tây Nguyên & Biển Đảo
                        </li>
                    </ul>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-menu">
                        <li className="footer__item-link footer__title">
                            Tour Châu Á
                        </li>
                        <li className="footer__item-link">Tour Châu Á</li>
                        <li className="footer__item-link">Tour Châu Âu</li>
                        <li className="footer__item-link">Tour Châu Úc</li>
                        <li className="footer__item-link">Tour Châu Mỹ</li>
                    </ul>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-menu">
                        <li className="footer__item-link footer__title">
                            Về Chúng Tôi
                        </li>
                        <li className="footer__item-link">
                            Vì Sao Lại Chọn DingDing
                        </li>
                        <li className="footer__item-link">Hồ Sơ Nhân Sự</li>
                        <li className="footer__item-link">Hỏi Đáp Nhanh</li>
                        <li className="footer__item-link">Liên Hệ</li>
                        <li className="footer__item-link">Tin Tức</li>
                        <li className="footer__item-link">
                            Đối Tác Của Chúng Tôi
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Footer;
