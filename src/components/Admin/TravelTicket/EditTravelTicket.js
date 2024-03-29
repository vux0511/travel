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

function EditNews() {
    const notify = () => toast();
    const [itemTravelTicket, setItemTravelTicket] = useState({});
    const { idTravelTicket } = useParams();
    const [dataForm, setDataForm] = useState({});

    const handleChangeTitle = (e) => {
        setItemTravelTicket({
            ...itemTravelTicket,
            nameTravelTicket: e.target.value,
        });
    };
    const handleChangeImage = (e) => {
        setItemTravelTicket({
            ...itemTravelTicket,
            imageTravelTicket: e.target.value,
        });
    };
    const handleChangePrice = (e) => {
        setItemTravelTicket({
            ...itemTravelTicket,
            priceTravelTicket: e.target.value,
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

    // Get Details
    useEffect(() => {
        axios
            .get(
                `${URL.URL_getTravelTicketDetail}?idTravelTicket=${idTravelTicket}`
            )
            .then((response) => {
                setItemTravelTicket(response.data[0]);
            });
    }, []);

    const handleEdit = (e) => {
        e.preventDefault();
        const fullData = itemTravelTicket;
        fullData.contentTravelTicket = dataForm;

        axios.post(URL.URL_editTravelTicket, fullData).then((response) => {
            if (response.data.status === "success") {
                toast.success("Sửa thành công", {
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
                toast.error("Sửa thất bại", {
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
                    <div className="overview-boxes">
                        <a href="/admin/travelticket/add">
                            <button className="button button__admin">
                                Thêm Vé Dịch Vụ
                            </button>
                        </a>
                    </div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="name">Tiêu đề: </label>
                            <input
                                id="name"
                                type="text"
                                className="editTour__input"
                                placeholder="Tiêu đề"
                                defaultValue={itemTravelTicket.nameTravelTicket}
                                onChange={handleChangeTitle}
                                required
                            />
                        </div>
                    </div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="name">Giá: </label>
                            <input
                                id="name"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập giá dịch vụ"
                                defaultValue={
                                    itemTravelTicket.priceTravelTicket
                                }
                                onChange={handleChangePrice}
                                required
                            />
                        </div>
                    </div>
                    <div className="editTour">
                        <div className="editTour__row">
                            <label htmlFor="name">Link ảnh: </label>
                            <input
                                id="name"
                                type="text"
                                className="editTour__input"
                                placeholder="Link ảnh chính..."
                                defaultValue={
                                    itemTravelTicket.imageTravelTicket
                                }
                                onChange={handleChangeImage}
                            />
                        </div>
                    </div>
                    <div className="editTour__editer">
                        <p className="desc__tour">Nội dung:</p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={itemTravelTicket.contentTravelTicket}
                            onReady={(editor) => {}}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setDataForm(data);
                            }}
                            onBlur={(event, editor) => {}}
                            onFocus={(event, editor) => {}}
                        />
                        <button
                            className="button button-primary button-edit"
                            onClick={handleEdit}
                        >
                            Sửa
                        </button>
                        <ToastContainer />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EditNews;
