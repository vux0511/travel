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
import JoditEditor from "jodit-react";

function AddTour() {
    const notify = () => toast();
    const [nameTour, setNameTour] = useState("");
    const [idCategory, setIdCategory] = useState([]);
    const [idCate, setIdCate] = useState("1");
    const [priceTour, setPriceTour] = useState("");
    const [dayTour, setDayTour] = useState("");
    const [descTour, setDescTour] = useState("");
    const [vehicleTour, setVehicleTour] = useState("");
    const [imageTour1, setImageTour1] = useState("");
    const [imageTour2, setImageTour2] = useState("");
    const [imageTour3, setImageTour3] = useState("");
    const [imageTour4, setImageTour4] = useState("");
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const handleChangeNameTour = (e) => {
        setNameTour(e.target.value);
    };
    const handleChangeIdCate = (e) => {
        setIdCate(e.target.value);
    };
    const handleChangePriceTour = (e) => {
        setPriceTour(e.target.value);
    };
    const handleChangeDescTour = (e) => {
        setDescTour(e.target.value);
    };
    const handleChangeImageTour1 = (e) => {
        setImageTour1(e.target.value);
    };
    const handleChangeImageTour2 = (e) => {
        setImageTour2(e.target.value);
    };
    const handleChangeImageTour3 = (e) => {
        setImageTour3(e.target.value);
    };
    const handleChangeImageTour4 = (e) => {
        setImageTour4(e.target.value);
    };
    const handleChangeVehicle = (e) => {
        setVehicleTour(e.target.value);
    };
    const handleChangeDayTour = (e) => {
        setDayTour(e.target.value);
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

    // Get Category
    useEffect(() => {
        axios.get(URL.URL_getCategory).then((response) => {
            setIdCategory(response.data);
        });
    }, []);
    const [dataForm, setDataForm] = useState({});

    const handleAdd = (e) => {
        e.preventDefault();
        let data = {
            nameTour: nameTour,
            idCategory: idCate,
            priceTour: priceTour,
            descTour: dataForm,
            dayTour: dayTour,
            vehicleTour: vehicleTour,
            imageTour1: imageTour1,
            imageTour2: imageTour2,
            imageTour3: imageTour3,
            imageTour4: imageTour4,
        };

        axios.post(URL.URL_addNewTour, data).then((response) => {
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
                        <span className="dashboard">Add Tour</span>
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
                    </div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="name">Tên Tour: </label>
                            <input
                                id="name"
                                type="text"
                                className="editTour__input"
                                placeholder="Tên tour"
                                onChange={handleChangeNameTour}
                            />
                            <label htmlFor="price">Giá Tour: </label>
                            <input
                                id="price"
                                type="text"
                                className="editTour__input"
                                placeholder="Giá tour"
                                required
                                onChange={handleChangePriceTour}
                            />
                            <label htmlFor="cate">Loại Tour: </label>
                            <select
                                onChange={handleChangeIdCate}
                                id="cate"
                                className="editTour__option"
                            >
                                {idCategory.map((idCategory) => (
                                    <option
                                        value={idCategory.idCategory}
                                        key={idCategory.idCategory}
                                    >
                                        {idCategory.nameCategory}
                                    </option>
                                ))}
                            </select>
                            <label htmlFor="day">Số ngày: </label>
                            <input
                                id="day"
                                type="text"
                                className="editTour__input"
                                placeholder="Số ngày tham quan"
                                onChange={handleChangeDayTour}
                            />
                            <label htmlFor="vehicle">Phương tiện: </label>
                            <input
                                type="vehicle"
                                className="editTour__input"
                                placeholder="Phương tiện đi lại"
                                onChange={handleChangeVehicle}
                            />
                        </div>
                        <div className="editTour__row">
                            <label htmlFor="image1">Ảnh 1: </label>
                            <input
                                id="image1"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 1"
                                onChange={handleChangeImageTour1}
                            />
                            <label htmlFor="image2">Ảnh 2: </label>
                            <input
                                id="image2"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 2"
                                onChange={handleChangeImageTour2}
                            />
                            <label htmlFor="image3">Ảnh 3: </label>
                            <input
                                id="image3"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 3"
                                onChange={handleChangeImageTour3}
                            />
                            <label htmlFor="image4">Ảnh 4: </label>
                            <input
                                id="image4"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 4"
                                onChange={handleChangeImageTour4}
                            />
                        </div>
                    </div>
                    <div className="editTour__editer">
                        <p className="desc__tour">Mô tả Tour:</p>
                        {/* <CKEditor
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
                         */}
                        <JoditEditor
                            ref={editor}
                            value={content}
                            tabIndex={1}
                            onBlur={(dataForm) => setDataForm(dataForm)}
                            onChange={(dataForm) => {}}
                        />
                        <button
                            className="button button-primary button-edit"
                            onClick={handleAdd}
                        >
                            Thêm Tour
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddTour;
