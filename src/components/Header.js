import { FiPhoneCall, FiMail, FiSearch, FiMenu } from "react-icons/fi";
import { MdOutlineClear } from "react-icons/md";
import Logo from "../assets/logo.png";

function Header() {
    return (
        <nav>
            <div className="header wrapper__top">
                <div className="header__top">
                    <div className="header__phone">
                        <FiPhoneCall />
                        <p>0842 88 0123</p>
                    </div>
                    <img src={Logo} alt="" className="header__logo" />
                    <div className="header__email">
                        <FiMail />
                        <p>vux.0511@gmail.com</p>
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
                            <a href="#">Home</a>
                        </li>
                        <li>
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
                        </li>
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
                        <li>
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
                        </li>
                        <li>
                            <a href="#">Fieldtrip</a>
                        </li>
                        <li>
                            <a href="#">Teambuilding</a>
                        </li>
                        <li>
                            <a href="#">Sinh Viên Quốc Tế</a>
                        </li>
                        <li>
                            <a href="#">Dịch Vụ Khác</a>
                        </li>
                        <li>
                            <a href="#">
                                <FiSearch />
                            </a>
                        </li>
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
