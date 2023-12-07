import Sidebar from "../Sidebar";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { GrMenu } from "react-icons/gr";
import { RxDashboard } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import URL from "../../../api/URL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ViewReview() {
    const notify = () => toast();
    const [listReview, setListReview] = useState([]);
    const [itemTours, setItemTours] = useState([]);

    useEffect(() => {
        axios.get(URL.URL_getReview).then((response) => {
            setListReview(response.data);
        });
    }, []);

    const handleDeleteNews = (e) => {
        e.preventDefault();
        var data = {
            idNews: e.target.value,
        };
        console.log(data);
        axios.post(URL.URL_deleteNews, data).then((response) => {
            const updatedItemsNews = listReview.filter((item) => {
                if (item.idNews === data.idNews) {
                    toast.success("Xoá thành công", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
                return item.idNews !== data.idNews;
            });
            setListReview(updatedItemsNews);
        });
    };

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

    return (
        <div className="main-container">
            <Sidebar />
            <section className="home-section">
                <nav>
                    <div className="sidebar-button" onClick={handleClickMenu}>
                        <GrMenu className="bx bx-menu sidebarBtn" />
                        <span className="dashboard"> Tin Tức</span>
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
                        <table>
                            <tbody>
                                <tr>
                                    <th className="table__id">ID</th>
                                    <th className="table__name">Họ Tên</th>
                                    <th className="table__name">Dịch Vụ</th>
                                    <th className="table__name">Nội Dung</th>
                                    <th className="table__action">Chức Năng</th>
                                </tr>
                            </tbody>
                            {listReview.map((news, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{news.idReview}</td>
                                        <td>{news.fullName}</td>
                                        <td>{news.titleReview}</td>
                                        <td>{news.contentReview}</td>
                                        <td>
                                            <a
                                                href={`/admin/review/edit/${news.idReview}`}
                                            >
                                                <button className="delete-item-product-btn">
                                                    Xem
                                                </button>
                                            </a>
                                            {/* <a href="#">
                                                <button
                                                    className="delete-item-product-btn"
                                                    value={news.idReview}
                                                    onClick={handleDeleteNews}
                                                >
                                                    Xoá
                                                </button>
                                                <ToastContainer />
                                            </a> */}
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ViewReview;
