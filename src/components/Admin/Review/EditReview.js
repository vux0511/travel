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
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate, Link, useParams } from "react-router-dom";

function EditReview() {
    const notify = () => toast();
    const [listTous, setListTour] = useState([]);
    const [itemTours, setItemTours] = useState([]);
    const [itemNews, setItemNews] = useState({});
    const { idReview } = useParams();
    const [dataForm, setDataForm] = useState({});

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

    // Get News
    useEffect(() => {
        axios
            .get(`${URL.URL_getReviewDetail}?idReview=${idReview}`)
            .then((response) => {
                setItemNews(response.data[0]);
            });
    }, []);

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
                    <div className="admin__review">
                        <div className="admin__review-item">
                            <label htmlFor="">Người đánh giá: </label>
                            <div className="admin__review-input">
                                {itemNews.fullName}
                            </div>
                        </div>
                        <div className="admin__review-item">
                            <label htmlFor="">Số điện thoại: </label>
                            <div className="admin__review-input">
                                {itemNews.phone}
                            </div>
                        </div>
                        <div className="admin__review-item">
                            <label htmlFor="">Dịch vụ trải nghiệm: </label>
                            <div className="admin__review-input">
                                {itemNews.titleReview}
                            </div>
                        </div>
                        <div className="admin__review-item">
                            <label htmlFor="">Nội dung đánh giá: </label>
                            <div className="admin__review-input">
                                {itemNews.contentReview}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EditReview;
