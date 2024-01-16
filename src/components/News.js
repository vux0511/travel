import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../api/URL";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

function News() {
    const [listNews, setListNews] = useState([]);

    // NEW Tourss
    useEffect(() => {
        axios.get(URL.URL_getNews).then((response) => {
            setListNews(response.data);
        });
    }, []);

    return (
        <section className="wrapper">
            <img
                src="https://imagetravel.vn/wp-content/uploads/2023/08/SLIDE-TEAMBUILDING-scaled.jpg
        "
                alt="Teambuilding Banner"
                className="teambuilding__banner"
            />
            <section className="container teambuilding news">
                <div className="visa__title visa__line teambuilding__title">
                    TIN TỨC DU LỊCH
                </div>
                <div className="news__wrapper">
                    {listNews.map((news, index) => (
                        <a
                            key={index}
                            href={`/tin-tuc/chi-tiet-bai-viet/idNews/${news.idNews}`}
                            className="news__item"
                        >
                            <img
                                src={news.imageNews}
                                alt=""
                                className="news__image"
                            />
                            <div className="news__info">
                                <div className="news__name">
                                    {news.titleNews}
                                </div>
                                <div className="news__desc">
                                    {parse(news.contentNews.slice(0, 140))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
        </section>
    );
}

export default News;
