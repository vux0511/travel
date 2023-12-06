import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import VietNamIcon from "../assets/vietnam-icon.png";
import LogoMain from "../assets/logo-main.jpeg";
import WorldIcon from "../assets/world-icon.png";
import HomeIcon from "../assets/Home-Icon.png";
import FieldTripIcon from "../assets/field-trip-icon.png";
import ServiceIcon from "../assets/public-service.png";
import ContactIcon from "../assets/contact-us.png";
import TeambuildingIcon from "../assets/team-building-icon.png";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
    return (
        <div className="wrapper">
            <>
                <nav>
                    <div className="wrapper">
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <div>
                            <Link to="/">
                                <img
                                    src={LogoMain}
                                    alt="LogoLeft"
                                    className="header__logo-left"
                                />
                            </Link>
                        </div>
                        <ul className="nav-links">
                            <label
                                htmlFor="close-btn"
                                className="btn close-btn"
                            >
                                <MdClear className="fas fa-times header__icon header__icon2" />
                            </label>

                            <li>
                                <img
                                    src={HomeIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a href="#" className="desktop-item">
                                    VỀ DING DING
                                </a>
                                <input type="checkbox" id="showDrop5" />
                                <label
                                    htmlFor="showDrop5"
                                    className="mobile-item"
                                >
                                    VỀ DING DING
                                </label>
                                <ul className="drop-menu5">
                                    <li>
                                        <a href="/gioi-thieu">GIỚI THIỆU</a>
                                    </li>
                                    <li>
                                        <a href="/ho-so-nang-luc">
                                            HỒ SƠ NĂNG LỰC
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img
                                    src={VietNamIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a
                                    href="/tour-trong-nuoc/category/1"
                                    className="desktop-item"
                                >
                                    TOUR TRONG NƯỚC
                                </a>
                                <input type="checkbox" id="showDrop" />
                                <label
                                    htmlFor="showDrop"
                                    className="mobile-item"
                                >
                                    TOUR TRONG NƯỚC
                                </label>
                                <ul className="drop-menu">
                                    <li>
                                        <a href="/tour-trong-nuoc/category/1">
                                            Tour Miền Bắc
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/2">
                                            Tour Miền Nam
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/3">
                                            Tour Tây Nguyên & Biển Đảo
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/4">
                                            Tour Di Sản Miền Trung
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img
                                    src={WorldIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a
                                    href="/tour-trong-nuoc/category/5"
                                    className="desktop-item"
                                >
                                    TOUR NƯỚC NGOÀI
                                </a>
                                <input type="checkbox" id="showDrop2" />
                                <label
                                    htmlFor="showDrop2"
                                    className="mobile-item"
                                >
                                    TOUR NƯỚC NGOÀI
                                </label>
                                <ul className="drop-menu2">
                                    <li>
                                        <a href="/tour-trong-nuoc/category/5">
                                            Tour Châu Á
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/6">
                                            Tour Châu Âu
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/7">
                                            Tour Châu Úc
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/8">
                                            Tour Châu Mỹ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img
                                    src={FieldTripIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a href="#" className="desktop-item">
                                    FIELD TRIP
                                </a>
                                <input type="checkbox" id="showDrop3" />
                                <label
                                    htmlFor="showDrop3"
                                    className="mobile-item"
                                >
                                    FIELD TRIP
                                </label>
                                <ul className="drop-menu3">
                                    <li>
                                        <a href="/trai-nghiem-sinh-vien">
                                            KIẾN TẬP TRẢI NGHIỆM SINH VIÊN
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/sinh-vien-quoc-te">
                                            SINH VIÊN QUỐC TẾ
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img
                                    src={TeambuildingIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a href="/teambuilding-event">TEAMBUILDING</a>
                            </li>
                            <li>
                                <img
                                    src={ServiceIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a href="#" className="desktop-item">
                                    DỊCH VỤ
                                </a>
                                <input type="checkbox" id="showDrop4" />
                                <label
                                    htmlFor="showDrop4"
                                    className="mobile-item"
                                >
                                    DỊCH VỤ
                                </label>
                                <ul className="drop-menu4">
                                    <li>
                                        <a href="/">TỔ CHỨC SỰ KIỆN</a>
                                    </li>
                                    <li>
                                        <a href="/hoa-tuoi">HOA TƯƠI</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu-visa">LÀM VISA</a>
                                    </li>
                                    <li>
                                        <a href="/dat-phong-khach-san">
                                            ĐẶT PHÒNG KHÁCH SẠN
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/dat-ve-may-bay">
                                            ĐẶT VÉ MÁY BAY
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/thue-xe">THUÊ XE</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <img
                                    src={ContactIcon}
                                    alt=""
                                    className="header__icon"
                                />
                                <a href="/lien-he" className="desktop-item">
                                    LIÊN HỆ
                                </a>
                                <input type="checkbox" id="showDrop4" />
                                <label
                                    htmlFor="showDrop4"
                                    className="mobile-item"
                                >
                                    LIÊN HỆ
                                </label>
                                <ul className="drop-menu4">
                                    {/* <li>
                                        <a href="/thue-xe">THUÊ XE</a>
                                    </li>
                                    <li>
                                        <a href="/hoa-tuoi">HOA TƯƠI</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu-visa">DỊCH VỤ VISA</a>
                                    </li> */}
                                </ul>
                            </li>
                        </ul>
                        <label htmlFor="menu-btn" className="btn menu-btn">
                            <AiOutlineMenu className="fas fa-bars header__icon" />
                        </label>
                    </div>
                </nav>
            </>
        </div>
    );
}

export default Header;
