import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../api/URL";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

function DetailNews() {
    const [detailNews, setDetailNews] = useState([]);
    const { idNews } = useParams();

    useEffect(() => {
        axios
            .get(`${URL.URL_getNewsDetail}?idNews=${idNews}`)
            .then((response) => {
                setDetailNews(response.data);
            });
    }, []);

    return (
        <div className="container detailnews">
            {detailNews.map((detailNews, index) => (
                <div className="detailnews__info">
                    <div className="detailnews__title">
                        {detailNews.titleNews}
                    </div>
                    <div className="detailnews__desc">
                        {parse(detailNews.contentNews)}
                    </div>
                </div>
            ))}
            <div className="detailnews__bottom">
                <div className="detailnews__bottom-title">DingDing Travel</div>
                <div className="detailnews__bottom-phone">
                    <FaPhone />
                    0964655286
                </div>
                <div className="detailnews__bottom-email">
                    <MdEmail />
                    dingding.info2018@gmail.com
                </div>
                <div className="detailnews__bottom-address">
                    <FaMapMarkerAlt />
                    L17-11, Tầng 17 toà nhà Vincom Center Đồng Khởi, 72 Lê Thánh
                    Tôn, Phường Bến Nghé, Quận 1 Thành phố Hồ Chí Minh
                </div>
                <div className="detailnews__bottom-fb">
                    <FaFacebook />
                    <a href="https://www.facebook.com/DingDingGo/">
                        Ding Ding Go
                    </a>
                </div>
            </div>
        </div>
    );
}

export default DetailNews;
