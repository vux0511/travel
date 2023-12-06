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

function EditTour() {
    const notify = () => toast();
    const [listTous, setListTour] = useState([]);
    const [itemTours, setItemTours] = useState([]);
    const [tourFieldTrip, setTourFieldTrip] = useState([]);
    const [itemTourEdit, setItemTourEdit] = useState({});
    const { idTour } = useParams();
    const [idCategory, setIdCategory] = useState([]);

    useEffect(() => {
        axios.get(URL.URL_getTour).then((response) => {
            setListTour(response.data);
        });
    }, []);

    const handleChangeNameTour = (e) => {
        setItemTourEdit({ ...itemTourEdit, nameTour: e.target.value });
    };
    const handleChangeIdCate = (e) => {
        setItemTourEdit({ ...itemTourEdit, idCategory: e.target.value });
    };
    const handleChangePriceTour = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            priceTour: e.target.value,
        });
    };
    const handleChangeDescTour = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            descTour: e.target.value,
        });
    };
    const handleChangeDayTour = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            dayTour: e.target.value,
        });
    };

    const handleChangeImageTour1 = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            imageTour1: e.target.value,
        });
    };
    const handleChangeImageTour2 = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            imageTour2: e.target.value,
        });
    };
    const handleChangeImageTour3 = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            imageTour3: e.target.value,
        });
    };
    const handleChangeImageTour4 = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            imageTour4: e.target.value,
        });
    };
    const handleChangeVehicle = (e) => {
        setItemTourEdit({
            ...itemTourEdit,
            vehicleTour: e.target.value,
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

    // Get Category
    useEffect(() => {
        axios.get(URL.URL_getCategory).then((response) => {
            setIdCategory(response.data);
        });
    }, []);

    // Get Tour
    useEffect(() => {
        axios
            .get(`${URL.URL_getTourDetail}?idTour=${idTour}`)
            .then((response) => {
                setItemTourEdit(response.data[0]);
            });
    }, []);

    const [dataForm, setDataForm] = useState({});

    const handleEdit = (e) => {
        e.preventDefault();
        const fullData = itemTourEdit;
        fullData.descTour = dataForm;
        // let data = itemProductEdit;
        // data.id = idProduct;

        axios.post(URL.URL_editTour, fullData).then((response) => {
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
                toast.success("Sửa thất bại", {
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
                                defaultValue={itemTourEdit.nameTour}
                                onChange={handleChangeNameTour}
                            />
                            <label htmlFor="price">Giá Tour: </label>
                            <input
                                id="price"
                                type="text"
                                className="editTour__input"
                                placeholder="Giá tour"
                                required
                                defaultValue={itemTourEdit.priceTour}
                                onChange={handleChangePriceTour}
                            />
                            <label htmlFor="cate">Loại Tour: </label>
                            <select
                                onChange={handleChangeIdCate}
                                id="cate"
                                className="editTour__option"
                                value={itemTourEdit.idCategory}
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
                                defaultValue={itemTourEdit.dayTour}
                                onChange={handleChangeDayTour}
                            />
                            <label htmlFor="vehicle">Phương tiện: </label>
                            <input
                                type="vehicle"
                                className="editTour__input"
                                placeholder="Phương tiện đi lại"
                                defaultValue={itemTourEdit.vehicleTour}
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
                                defaultValue={itemTourEdit.imageTour1}
                                onChange={handleChangeImageTour1}
                            />
                            <label htmlFor="image2">Ảnh 2: </label>
                            <input
                                id="image2"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 2"
                                defaultValue={itemTourEdit.imageTour2}
                                onChange={handleChangeImageTour2}
                            />
                            <label htmlFor="image3">Ảnh 3: </label>
                            <input
                                id="image3"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 3"
                                defaultValue={itemTourEdit.imageTour3}
                                onChange={handleChangeImageTour3}
                            />
                            <label htmlFor="image4">Ảnh 4: </label>
                            <input
                                id="image4"
                                type="text"
                                className="editTour__input"
                                placeholder="Nhập đường link ảnh 4"
                                defaultValue={itemTourEdit.imageTour4}
                                onChange={handleChangeImageTour4}
                            />
                        </div>
                    </div>
                    <div className="editTour__editer">
                        <p className="desc__tour">Mô tả Tour:</p>
                        <CKEditor
                            editor={ClassicEditor}
                            data={itemTourEdit.descTour}
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

export default EditTour;
