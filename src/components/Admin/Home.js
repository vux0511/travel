import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiBoots } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";

import ImgUser from "../../assets/avatar_user.webp";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { GrMenu } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";

import URL from "../../api/URL";

function Home() {
    const [countProducts, setCountProducts] = useState(0);
    const [countOrders, setCountOrders] = useState(0);
    const [countUsers, setCountUsers] = useState(0);
    const [orders, setOrders] = useState([]);

    const handleClickMenu = () => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        sidebarBtn.onclick = function () {
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        };
    };

    // useEffect(() => {
    //     axios.get(URL.URL_getHomeAdmin).then((response) => {
    //         setCountProducts(response.data.countProducts);
    //         setCountOrders(response.data.countOrders);
    //         setCountUsers(response.data.countUsers);
    //     });
    // }, []);

    // useEffect(() => {
    //     axios.get(URL.URL_getOrder).then((response) => {
    //         setOrders(response.data);
    //     });
    // }, []);

    return (
        <>
            <section className="home-section">
                <nav>
                    <div className="sidebar-button" onClick={handleClickMenu}>
                        <GrMenu className="bx bx-menu sidebarBtn" />
                    </div>
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                        <IoSearch className="bx bx-search" />
                    </div>
                    <div className="profile-details">
                        <img
                            src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                            alt=""
                        />
                        <span className="admin_name">Admin</span>
                    </div>
                </nav>
                <div className="home-content">
                    <div className="overview-boxes">
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Số Tour</div>
                                <div className="number">99+</div>
                            </div>
                            <SiYourtraveldottv className="bx bx-cart-alt cart" />
                        </div>
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Tour Trong Nước</div>
                                <div className="number">5</div>
                            </div>
                            <SiYourtraveldottv className="bx bxs-cart-add cart two" />
                        </div>
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Tour Nước Ngoài</div>
                                <div className="number">4</div>
                            </div>
                            <SiYourtraveldottv className="bx bx-cart cart three" />
                        </div>
                        <div className="box">
                            <div className="right-side">
                                <div className="box-topic">Tổng Số Tour</div>
                                <div className="number">9</div>
                            </div>
                            <SiYourtraveldottv className="bx bx-cart cart three" />
                        </div>
                    </div>
                    {/* <div className="sales-boxes">
                        <div className="recent-sales box">
                            <div className="title">Recent Sales</div>
                            <div className="sales-details">
                                <ul className="details">
                                    <li className="topic">Date</li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                    <li>
                                        <a href="#">02 Jan 2021</a>
                                    </li>
                                </ul>
                                <ul className="details">
                                    <li className="topic">Customer</li>
                                    <li>
                                        <a href="#">Alex Doe</a>
                                    </li>
                                    <li>
                                        <a href="#">David Mart</a>
                                    </li>
                                    <li>
                                        <a href="#">Roe Parter</a>
                                    </li>
                                    <li>
                                        <a href="#">Diana Penty</a>
                                    </li>
                                    <li>
                                        <a href="#">Martin Paw</a>
                                    </li>
                                    <li>
                                        <a href="#">Doe Alex</a>
                                    </li>
                                    <li>
                                        <a href="#">Aiana Lexa</a>
                                    </li>
                                    <li>
                                        <a href="#">Rexel Mags</a>
                                    </li>
                                    <li>
                                        <a href="#">Tiana Loths</a>
                                    </li>
                                </ul>
                                <ul className="details">
                                    <li className="topic">Sales</li>
                                    <li>
                                        <a href="#">Delivered</a>
                                    </li>
                                    <li>
                                        <a href="#">Pending</a>
                                    </li>
                                    <li>
                                        <a href="#">Returned</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivered</a>
                                    </li>
                                    <li>
                                        <a href="#">Pending</a>
                                    </li>
                                    <li>
                                        <a href="#">Returned</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivered</a>
                                    </li>
                                    <li>
                                        <a href="#">Pending</a>
                                    </li>
                                    <li>
                                        <a href="#">Delivered</a>
                                    </li>
                                </ul>
                                <ul className="details">
                                    <li className="topic">Total</li>
                                    <li>
                                        <a href="#">$204.98</a>
                                    </li>
                                    <li>
                                        <a href="#">$24.55</a>
                                    </li>
                                    <li>
                                        <a href="#">$25.88</a>
                                    </li>
                                    <li>
                                        <a href="#">$170.66</a>
                                    </li>
                                    <li>
                                        <a href="#">$56.56</a>
                                    </li>
                                    <li>
                                        <a href="#">$44.95</a>
                                    </li>
                                    <li>
                                        <a href="#">$67.33</a>
                                    </li>
                                    <li>
                                        <a href="#">$23.53</a>
                                    </li>
                                    <li>
                                        <a href="#">$46.52</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <a href="#">See All</a>
                            </div>
                        </div>
                        <div className="top-sales box">
                            <div className="title">Top Seling Product</div>
                            <ul className="top-sales-details">
                                <li>
                                    <a href="#">
                                        <img
                                            src="images/sunglasses.jpg"
                                            alt=""
                                        />
                                        <span className="product">
                                            Vuitton Sunglasses
                                        </span>
                                    </a>
                                    <span className="price">$1107</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/jeans.jpg" alt="" />
                                        <span className="product">
                                            Hourglass Jeans
                                        </span>
                                    </a>
                                    <span className="price">$1567</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/nike-min.jpg" alt="" />
                                        <span className="product">
                                            Nike Sport Shoe
                                        </span>
                                    </a>
                                    <span className="price">$1234</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/scarves.jpg" alt="" />
                                        <span className="product">
                                            Hermes Silk Scarves.
                                        </span>
                                    </a>
                                    <span className="price">$2312</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/blueBag.jpg" alt="" />
                                        <span className="product">
                                            Succi Ladies Bag
                                        </span>
                                    </a>
                                    <span className="price">$1456</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/bag.jpg" alt="" />
                                        <span className="product">
                                            Gucci Womens's Bags
                                        </span>
                                    </a>
                                    <span className="price">$2345</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/addidas.jpg" alt="" />
                                        <span className="product">
                                            Addidas Running Shoe
                                        </span>
                                    </a>
                                    <span className="price">$2345</span>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src="images/shirt.jpg" alt="" />
                                        <span className="product">
                                            Bilack Wear's Shirt
                                        </span>
                                    </a>
                                    <span className="price">$1245</span>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default Home;
