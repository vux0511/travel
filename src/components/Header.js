import { MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import VietNamIcon from "../assets/vietnam-icon.png";
import LogoMain from "../assets/logo-main.jpeg";
import WorldIcon from "../assets/world-icon.png";
import ReviewIcon from "../assets/review-icon.png";
import NewsIcon from "../assets/news-icon.png";
import TourIcon from "../assets/tour-icon.png";
import Ticket from "../assets/ticket-icon.png";
import HomeIcon from "../assets/Home-Icon.png";
import FieldTripIcon from "../assets/field-trip-icon.png";
import ServiceIcon from "../assets/public-service.png";
import ContactIcon from "../assets/contact-us.png";
import TeambuildingIcon from "../assets/team-building-icon.png";
import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

function Header() {
    const [scrolled, setScrolled] = useState(false);

    const handleMenu = () => {
        let menuToggle = document.querySelector(".menuToggle");
        let header = document.querySelector("header");
        header.classList.toggle("active");
    };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`main-header wrapper ${
                scrolled ? "sticky-header wrapper" : ""
            }`}
        >
            {/* <a href="#" className="logo">
                DINGDING
            </a>

            <input type="checkbox" name="#" id="menu-bar" />
            <label htmlFor="menu-bar">Menu</label>

            <nav className="navbar">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Tour +</a>
                        <ul>
                            <li>
                                <a href="#">Tour Trong Nước</a>
                                <ul>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Tour Nước Ngoài</a>
                                <ul>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                    <li>
                                        <a href="#">Tour Miền Bắc</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Pages +</a>
                        <ul>
                            <li>
                                <a href="#">Page 1</a>
                            </li>
                            <li>
                                <a href="#">Page 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Review</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav> */}

            <a href="/" className="logo">
                <img src={LogoMain} alt="Logo" className="logo" />
            </a>
            <div className="menuToggle" onClick={handleMenu}></div>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img
                                src={HomeIcon}
                                alt=""
                                className="header__icon"
                            />
                            VỀ DING DING
                        </a>
                        <ul>
                            <li>
                                <a href="/gioi-thieu">GIỚI THIỆU</a>
                            </li>
                            <li>
                                <a href="/ho-so-nang-luc">HỒ SƠ NĂNG LỰC</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={TourIcon}
                                alt=""
                                className="header__icon"
                            />
                            TOUR
                        </a>
                        <ul>
                            <li>
                                <a href="#">TOUR TRONG NƯỚC</a>
                                <ul>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/1">
                                            TOUR MIỀN BẮC
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/2">
                                            TOUR MIỀN NAM
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/3">
                                            TOUR TÂY NGUYÊN & BIỂN ĐẢO
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/4">
                                            TOUR DI SẢN MIỀN TRUNG
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/tour-trong-nuoc/category/5">
                                    {" "}
                                    TOUR NƯỚC NGOÀI
                                </a>
                                <ul>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/5">
                                            TOUR CHÂU Á
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/6">
                                            TOUR CHÂU ÂU
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/7">
                                            TOUR CHÂU ÚC
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/8">
                                            TOUR CHÂU MỸ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/tour-trong-nuoc/category/9">
                                            TOUR FIELD TRIP
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/teambuilding-event">TEAMBUILDING</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <img src={Ticket} alt="" className="header__icon" />
                            TICKET
                        </a>
                        <ul>
                            <li>
                                <a href="/ve-may-bay">VÉ BÁY MAY</a>
                            </li>
                            <li>
                                <a href="#">VÉ DỊCH VỤ</a>
                                <ul>
                                    <li>
                                        <a href="/ve-tham-quan-du-lich">
                                            VÉ THAM QUAN DU LỊCH
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/ve-combo">COMBO</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/trai-nghiem-sinh-vien">
                            <img
                                src={FieldTripIcon}
                                alt=""
                                className="header__icon"
                            />
                            FIELD TRIP
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img
                                src={ServiceIcon}
                                alt=""
                                className="header__icon"
                            />
                            DỊCH VỤ
                        </a>
                        <ul>
                            <li>
                                <a href="/events">TỔ CHỨC SỰ KIỆN</a>
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
                                <a href="/viec-lam-nuoc-ngoai">
                                    VIỆC LÀM NƯỚC NGOÀI
                                </a>
                            </li>
                            <li>
                                <a href="/thue-xe">THUÊ XE</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/tin-tuc">
                            <img
                                src={NewsIcon}
                                alt=""
                                className="header__icon"
                            />
                            TIN TỨC
                        </a>
                    </li>
                    <li>
                        <a href="/danh-gia">
                            <img
                                src={ReviewIcon}
                                alt=""
                                className="header__icon"
                            />
                            REVIEW
                        </a>
                    </li>
                    <li>
                        <a href="/lien-he">
                            <img
                                src={ContactIcon}
                                alt=""
                                className="header__icon"
                            />
                            LIÊN HỆ
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
