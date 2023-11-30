import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import LogoLeft from "../assets/logo-left.png";
import LogoMain from "../assets/logo-main.jpeg";
import { FiPhoneCall, FiMail, FiSearch, FiMenu } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgMenuLeftAlt } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";

function Header() {
    return (
        <div className="wrapper">
            <>
                <nav>
                    <div className="container">
                        <div className="header__top">
                            <Link to="/">
                                <img
                                    src={LogoLeft}
                                    alt="LogoLeft"
                                    className="header__logo-left"
                                />
                            </Link>
                            <img
                                src={LogoMain}
                                alt="LogoMain"
                                className="header__logo-main"
                            />
                            <div className="header__contact">
                                <div className="header__contact-phone">
                                    <FiPhoneCall /> 0914134626
                                </div>
                                <div className="header__contact-email">
                                    <FiMail /> sales@dingding.vn
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <div className="logo">{/* <a href="#">Logo</a> */}</div>
                        <input type="radio" name="slider" id="menu-btn" />
                        <input type="radio" name="slider" id="close-btn" />
                        <ul className="nav-links">
                            <label
                                htmlFor="close-btn"
                                className="btn close-btn"
                            >
                                <MdClear className="fas fa-times header__icon header__icon2" />
                            </label>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
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
                                <a href="#" className="desktop-item">
                                    TOUR FIELTRIP & TTSV
                                </a>
                                <input type="checkbox" id="showDrop3" />
                                <label
                                    htmlFor="showDrop3"
                                    className="mobile-item"
                                >
                                    TOUR FIELTRIP & TTSV
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
                                <a href="/teambuilding-event">
                                    TEAMBUILDING & EVENTS
                                </a>
                            </li>
                            <li>
                                <a href="#" className="desktop-item">
                                    DỊCH VỤ CUNG ỨNG
                                </a>
                                <input type="checkbox" id="showDrop4" />
                                <label
                                    htmlFor="showDrop4"
                                    className="mobile-item"
                                >
                                    DỊCH VỤ CUNG ỨNG
                                </label>
                                <ul className="drop-menu4">
                                    <li>
                                        <a href="/thue-xe">THUÊ XE</a>
                                    </li>
                                    <li>
                                        <a href="/hoa-tuoi">HOA TƯƠI</a>
                                    </li>
                                    <li>
                                        <a href="/dich-vu-visa">DỊCH VỤ VISA</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" className="desktop-item">
                                    VỀ CHÚNG TÔI
                                </a>
                                <input type="checkbox" id="showDrop5" />
                                <label
                                    htmlFor="showDrop5"
                                    className="mobile-item"
                                >
                                    VỀ CHÚNG TÔI
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
