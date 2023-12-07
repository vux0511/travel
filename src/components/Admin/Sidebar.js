import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SiYourtraveldottv } from "react-icons/si";
import { RxDashboard } from "react-icons/rx";
import { IoIosLogOut } from "react-icons/io";
import { FaRegNewspaper } from "react-icons/fa";

function Sidebar() {
    const navigate = useNavigate();

    //Check login
    useEffect(() => {
        if (localStorage.getItem("idAdmin") === null) {
            navigate("/admin/login");
        }
    }, []);

    const handleLogOutAdmin = () => {
        localStorage.removeItem("idAdmin");
        navigate("/admin/login");
    };

    return (
        <div className="sidebar">
            <div className="logo-details">
                <SiYourtraveldottv className="bx bxl-c-plus-plus" />
                <span className="logo_name">DingDing</span>
            </div>
            <ul className="nav-link">
                <li>
                    <a href="/admin" className="active">
                        <RxDashboard className="bx bx-grid-alt" />
                        <span className="links_name">HOME</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/tour/view">
                        <SiYourtraveldottv className="bx bx-grid-alt" />
                        <span className="links_name">Tour</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/news/view">
                        <FaRegNewspaper className="bx bx-grid-alt" />
                        <span className="links_name">Tin Tức</span>
                    </a>
                </li>
                <li>
                    <a href="/admin/review/view">
                        <FaRegNewspaper className="bx bx-grid-alt" />
                        <span className="links_name">Đánh giá</span>
                    </a>
                </li>
                <li onClick={handleLogOutAdmin}>
                    <a href="#">
                        <IoIosLogOut className="bx bx-grid-alt" />
                        <span className="links_name">Đăng Xuất</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
