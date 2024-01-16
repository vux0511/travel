import Logo from "../assets/logo-main.jpeg";
import { FaMapLocation } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

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
                            <FaPhoneAlt className="footer__icon" /> 0964655286
                        </div>
                        <div className="footer__email">
                            <MdEmail className="footer__icon" />{" "}
                            dingding.info2018@gmail.com
                        </div>
                    </div>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-menu">
                        <li className="footer__item-link footer__title">
                            Tour Trong Nước
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/1">
                                Tour Miền Bắc
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/2">
                                Tour Di Sản Miền Trung
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/3">
                                Tour Miền Nam
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/4">
                                Tour Tây Nguyên & Biển Đảo
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/9">
                                Tour Field Trip
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-menu">
                        <li className="footer__item-link footer__title">
                            Tour Nước Ngoài
                        </li>
                        <li className="footer__item-link ">
                            <a href="/tour-trong-nuoc/category/5">
                                Tour Châu Á
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/6">
                                Tour Châu Âu
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/7">
                                Tour Châu Úc
                            </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tour-trong-nuoc/category/1">
                                Tour Châu Mỹ
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer__item">
                    <ul className="footer__item-menu">
                        <li className="footer__item-link footer__title">
                            Về Chúng Tôi
                        </li>
                        <li className="footer__item-link">
                            <a href="/gioi-thieu">Vì Sao Lại Chọn Ding Ding </a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/ho-so-nang-luc">Hồ Sơ Năng Lực</a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/lien-he">Liên Hệ</a>
                        </li>
                        <li className="footer__item-link">
                            <a href="/tin-tuc"> Tin Tức</a>
                        </li>
                    </ul>
                </div>
            </div>
            <a href="tel: 0964655286" rel="nofollow" className="btn-call">
                <div className="btn-call__ico">
                    <FaPhone className="fas fa-phone-alt" />
                </div>
            </a>
        </section>
    );
}

export default Footer;
