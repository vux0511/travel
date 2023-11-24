import { FiPhoneCall, FiMail, FiSearch, FiMenu } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import LogoLeft from "../assets/logo-left.png";
import LogoMain from "../assets/logo-main.jpeg";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <div className="header wrapper__top">
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
                <div className="menu">
                    <input type="radio" name="slider" id="menu-btn" />
                    <input type="radio" name="slider" id="close-btn" />
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn">
                            <MdOutlineClear />
                        </label>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/tour-trong-nuoc">Tour Trong Nước</Link>
                        </li>
                        <li>
                            <Link to="/tour-nuoc-ngoai">Tour Nước Ngoài</Link>
                        </li>
                        {/* <li>
                            <a href="#" className="desktop-item">
                                Tour Trong Nước
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Dropdown Menu
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <a href="#">Tour Mai Châu – Mộc Châu</a>
                                </li>
                                <li>
                                    <a href="#">Tour Bình Liêu - Mùa Hoa Lau</a>
                                </li>
                                <li>
                                    <a href="#">
                                        Tour Hà Nội - Sơn La - Điện Biên
                                    </a>
                                </li>
                                <li>
                                    <a href="#">Tour Ba Bể - Bản Giốc</a>
                                </li>
                            </ul>
                        </li> */}
                        {/* <li>
                            <a href="#" className="desktop-item">
                                Tour Trong Nước
                            </a>
                            <input type="checkbox" id="showMega" />
                            <label htmlFor="showMega" className="mobile-item">
                                Mega Menu
                            </label>
                            <div className="mega-box">
                                <div className="content">
                                    <img
                                        src="https://luxurytravel.vn/wp-content/uploads/2023/10/7-1267-1651978886-850x540.jpg"
                                        alt=""
                                        className="header__img-tour-main"
                                    />
                                    <div className="header__tour-wrapper">
                                        <div className="header__tour-item">
                                            <img
                                                src="https://luxurytravel.vn/wp-content/uploads/2023/10/7-1267-1651978886-850x540.jpg"
                                                alt=""
                                                className="header__tour-img"
                                            />
                                            <div className="header__tour-name">
                                                Tour Mai Châu – Mộc Châu – Cầu
                                                Kính Bạch Long 2N1Đ
                                            </div>
                                        </div>
                                        <div className="header__tour-item">
                                            <img
                                                src="https://luxurytravel.vn/wp-content/uploads/2023/10/7-1267-1651978886-850x540.jpg"
                                                alt=""
                                                className="header__tour-img"
                                            />
                                            <div className="header__tour-name">
                                                Tour Mai Châu – Mộc Châu – Cầu
                                                Kính Bạch Long 2N1Đ
                                            </div>
                                        </div>
                                        <div className="header__tour-item">
                                            <img
                                                src="https://luxurytravel.vn/wp-content/uploads/2023/10/7-1267-1651978886-850x540.jpg"
                                                alt=""
                                                className="header__tour-img"
                                            />
                                            <div className="header__tour-name">
                                                Tour Mai Châu – Mộc Châu – Cầu
                                                Kính Bạch Long 2N1Đ
                                            </div>
                                        </div>
                                        <div className="header__tour-item">
                                            <img
                                                src="https://luxurytravel.vn/wp-content/uploads/2023/10/7-1267-1651978886-850x540.jpg"
                                                alt=""
                                                className="header__tour-img"
                                            />
                                            <div className="header__tour-name">
                                                Tour Mai Châu – Mộc Châu – Cầu
                                                Kính Bạch Long 2N1Đ
                                            </div>
                                        </div>
                                        <div className="header__tour-item">
                                            <img
                                                src="https://luxurytravel.vn/wp-content/uploads/2023/10/7-1267-1651978886-850x540.jpg"
                                                alt=""
                                                className="header__tour-img"
                                            />
                                            <div className="header__tour-name">
                                                Tour Mai Châu – Mộc Châu – Cầu
                                                Kính Bạch Long 2N1Đ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li> */}
                        {/* <li>
                            <a href="#" className="desktop-item">
                                Tour Nước Ngoài
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Dropdown Menu
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <a href="#">Drop menu 1</a>
                                </li>
                                <li>
                                    <a href="#">Drop menu 2</a>
                                </li>
                                <li>
                                    <a href="#">Drop menu 3</a>
                                </li>
                                <li>
                                    <a href="#">Drop menu 4</a>
                                </li>
                            </ul>
                        </li> */}
                        <li>
                            <a href="#" className="desktop-item">
                                Tour fieltrip & TNSV
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Tour fieltrip & TNSV
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <Link to="/kien-tap">
                                        Kiến tập trải nghiệm Sinh viên
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/sv-quoc-te">
                                        Sinh Viên quốc tế
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/teambuilding-event">
                                TEAMBUILDING & EVENTS
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="desktop-item">
                                Dịch Vụ Cung Ứng
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Dịch Vụ Cung Ứng
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <Link to="/ho-so-nang-luc">Thuê Xe</Link>
                                </li>
                                <li>
                                    <Link to="/dich-vu-visa">Dịch Vụ Visa</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="desktop-item">
                                Về Chúng Tôi
                            </a>
                            <input type="checkbox" id="showDrop" />
                            <label htmlFor="showDrop" className="mobile-item">
                                Về Chúng Tôi
                            </label>
                            <ul className="drop-menu">
                                <li>
                                    <Link to="/ho-so-nang-luc">
                                        Hồ Sơ Năng Lực
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/gioi-thieu">Giới Thiệu</Link>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <a href="#">
                                <FiSearch />
                            </a>
                        </li> */}
                    </ul>
                </div>

                <label htmlFor="menu-btn" className="btn menu-btn">
                    <FiMenu />
                </label>
            </div>
        </nav>
    );
}

export default Header;
