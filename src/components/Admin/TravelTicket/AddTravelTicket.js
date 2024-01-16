import Sidebar from "../Sidebar";
import React, { useState, useRef, useMemo, useEffect } from "react";

import { GrMenu } from "react-icons/gr";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import URL from "../../../api/URL";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import JoditEditor from "jodit-react";

function AddNews() {
    const notify = () => toast();
    const [nameTravelTicket, setNameTravelTicket] = useState("");
    const [imageTravelTicket, setImageTravelTicket] = useState("");
    const [priceTravelTicket, setPriceTravelTicket] = useState("");
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const handleChangeTitle = (e) => {
        setNameTravelTicket(e.target.value);
    };
    const handleChangeImage = (e) => {
        setImageTravelTicket(e.target.value);
    };
    const handleChangePrice = (e) => {
        setPriceTravelTicket(e.target.value);
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

    const [dataForm, setDataForm] = useState({});

    const handleAdd = (e) => {
        e.preventDefault();
        let data = {
            nameTravelTicket: nameTravelTicket,
            contentTravelTicket: dataForm,
            imageTravelTicket: imageTravelTicket,
            priceTravelTicket: priceTravelTicket,
        };

        axios.post(URL.URL_addTravelTicket, data).then((response) => {
            if (response.data.status === "success") {
                toast.success("Thêm thành công", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            } else {
                toast.error("Thêm thất bại", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        });
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
                    <div className="overview-boxes"></div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="name">Tiêu đề: </label>
                            <input
                                id="name"
                                type="text"
                                className="editTour__input"
                                placeholder="Tiêu đề..."
                                onChange={handleChangeTitle}
                            />
                        </div>
                    </div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="name">Giá dịch vụ: </label>
                            <input
                                id="name"
                                type="number"
                                className="editTour__input"
                                placeholder="Giá dịch vụ..."
                                onChange={handleChangePrice}
                            />
                        </div>
                    </div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="image1">Ảnh: </label>
                            <input
                                id="image1"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh"
                                onChange={handleChangeImage}
                            />
                        </div>
                    </div>
                    <div className="editTour__editer">
                        <p className="desc__tour">Mô tả dịch vụ:</p>
                        {/* <JoditEditor
                            ref={editor}
                            value={content}
                            tabIndex={1}
                            onBlur={(dataForm) => setDataForm(dataForm)}
                            onChange={(dataForm) => {}}
                        /> */}
                        <CKEditor
                            editor={ClassicEditor}
                            data="Nhập mô tả tour..."
                            onReady={(editor) => {
                                // You can store the "editor" and use when it is needed.
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setDataForm(data);
                            }}
                            onBlur={(event, editor) => {}}
                            onFocus={(event, editor) => {}}
                        />
                        <button
                            className="button button-primary button-edit"
                            onClick={handleAdd}
                        >
                            Thêm Vé Dịch Vụ
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddNews;
