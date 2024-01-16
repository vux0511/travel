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
    const [listTous, setListTour] = useState([]);
    const [itemTours, setItemTours] = useState([]);

    useEffect(() => {
        axios.get(URL.URL_getTour).then((response) => {
            setListTour(response.data);
        });
    }, []);

    const handleDeleteTour = (e) => {
        e.preventDefault();
        var data = {
            idTour: e.target.value,
        };
        axios.post(URL.URL_deleteTour, data).then((response) => {
            const updatedItemsTours = listTous.filter((item) => {
                if (item.idTour === data.idTour) {
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
                return item.idTour !== data.idTour;
            });
            setListTour(updatedItemsTours);
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
                        <a href="/admin/tour/add">
                            <button className="button button__admin">
                                Thêm Tour
                            </button>
                        </a>
                        <table>
                            <tbody>
                                <tr>
                                    <th className="table__id">ID</th>
                                    <th className="table__name">Tên Tour</th>
                                    <th className="table__image">Ảnh</th>
                                    <th className="table__price">Giá</th>
                                    <th className="table__day">Ngày</th>
                                    <th className="table__vehicle">
                                        Phương Tiện
                                    </th>
                                    {/* <th className="table__desc">Mô Tả</th> */}
                                    <th className="table__action">
                                        Trạng Thái
                                    </th>
                                </tr>
                            </tbody>
                            {listTous.map((tours, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td>{tours.idTour}</td>
                                        <td>{tours.nameTour}</td>
                                        <td>
                                            <img
                                                src={tours.imageTour1}
                                                className="table__image-size"
                                            />
                                        </td>
                                        <td>
                                            {tours.priceTour
                                                .toString()
                                                .replace(
                                                    /\B(?=(\d{3})+(?!\d))/g,
                                                    ","
                                                )}
                                            đ
                                        </td>
                                        <td>{tours.dayTour}</td>
                                        <td>{tours.vehicleTour}</td>
                                        {/* <td className="table__desc-text">
                                        {tours.descTour}
                                    </td> */}
                                        <td>
                                            <a
                                                href={`/admin/tour/edit/${tours.idTour}`}
                                            >
                                                <button className="delete-item-product-btn">
                                                    Sửa
                                                </button>
                                            </a>{" "}
                                            <a href="">
                                                <button
                                                    className="delete-item-product-btn"
                                                    value={tours.idTour}
                                                    onClick={handleDeleteTour}
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
