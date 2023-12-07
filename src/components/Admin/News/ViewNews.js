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

function ViewTour() {
    const notify = () => toast();
    const [listNews, setListNews] = useState([]);
    const [itemTours, setItemTours] = useState([]);

    useEffect(() => {
        axios.get(URL.URL_getNews).then((response) => {
            setListNews(response.data);
        });
    }, []);

    const handleDeleteNews = (e) => {
        e.preventDefault();
        var data = {
            idNews: e.target.value,
        };
        console.log(data);
        axios.post(URL.URL_deleteNews, data).then((response) => {
            const updatedItemsNews = listNews.filter((item) => {
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
            setListNews(updatedItemsNews);
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
                        <span className="dashboard">Add Tin Tức</span>
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
                        <a href="/admin/news/add">
                            <button className="button button__admin">
                                Thêm News
                            </button>
                        </a>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="table__id">ID</th>
                                    <th className="table__name">Title</th>
                                    <th className="table__action">Chức Năng</th>
                                </tr>
                            </tbody>
                            {listNews.map((news, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{news.idNews}</td>
                                        <td>{news.titleNews}</td>
                                        <td>
                                            <a
                                                href={`/admin/news/edit/${news.idNews}`}
                                            >
                                                <button className="delete-item-product-btn">
                                                    Sửa
                                                </button>
                                            </a>
                                            <a href="#">
                                                <button
                                                    className="delete-item-product-btn"
                                                    value={news.idNews}
                                                    onClick={handleDeleteNews}
                                                >
                                                    Xoá
                                                </button>
                                                <ToastContainer />
                                            </a>
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

export default ViewTour;
