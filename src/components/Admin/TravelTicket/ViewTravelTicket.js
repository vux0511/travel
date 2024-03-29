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

function ViewTravelTicket() {
    const notify = () => toast();
    const [listTravelTicket, setListTravelTicket] = useState([]);

    useEffect(() => {
        axios.get(URL.URL_getTravelTicket).then((response) => {
            setListTravelTicket(response.data);
        });
    }, []);

    const handleDeleteNews = (e) => {
        e.preventDefault();
        var data = {
            idTravelTicket: e.target.value,
        };
        axios.post(URL.URL_deleteTravelTicket, data).then((response) => {
            const updatedItemsTravelTicket = listTravelTicket.filter((item) => {
                if (item.idTravelTicket === data.idTravelTicket) {
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
                return item.idTravelTicket !== data.idTravelTicket;
            });
            setListTravelTicket(updatedItemsTravelTicket);
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
                        <a href="/admin/travelticket/add">
                            <button className="button button__admin">
                                Thêm Vé Dịch Vụ
                            </button>
                        </a>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="table__name">Tiêu Đề</th>
                                    <th className="table__action">Chức Năng</th>
                                </tr>
                            </tbody>
                            {listTravelTicket.map((travelticket, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{travelticket.nameTravelTicket}</td>
                                        <td>
                                            <a
                                                href={`/admin/travelticket/edit/${travelticket.idTravelTicket}`}
                                            >
                                                <button className="delete-item-product-btn">
                                                    Sửa
                                                </button>
                                            </a>
                                            <a href="#">
                                                <button
                                                    className="delete-item-product-btn"
                                                    value={
                                                        travelticket.idTravelTicket
                                                    }
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

export default ViewTravelTicket;
