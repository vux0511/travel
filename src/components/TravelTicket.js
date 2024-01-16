import { useState, useEffect } from "react";
import axios from "axios";
import URL from "../api/URL";
import { useNavigate, useParams } from "react-router-dom";
import parse from "html-react-parser";

function TravelTicket() {
    const [travelTicket, setTravelTicket] = useState([]);

    // Get TravelTicket
    useEffect(() => {
        axios.get(URL.URL_getTravelTicket).then((response) => {
            setTravelTicket(response.data);
        });
    }, []);

    return (
        <div className="wrapper">
            <img
                src="https://banvouchervinpearlgiare.com/wp-content/uploads/2018/04/slide-voucher-vinpearl-2-new.jpg"
                alt="Teambuilding Banner"
                className="teambuilding__banner"
            />
            <div className="container">
                <section className="teambuilding">
                    <div className="visa__title visa__line">
                        VÉ KHU VUI CHƠI
                    </div>
                    <div className="visa__desc">
                        <p>
                            Công ty Ding Ding là đối tác đại lý trong nhiều năm
                            của các tập đoàn tổ hợp vui chơi lớn trong cả nước
                            như : Vinpearl, Sunworld, Núi Thần Tài, …
                        </p>
                        <p>
                            Mỗi năm DingDing luôn có số lượng lớn vé khu vui
                            chơi được bán ra với chủ yếu khách hàng là đối tượng
                            học sinh , sịn viên,… nên công ty luôn có những ưu
                            đãi đặc biệt về giá trong từng giai đoạn trong năm.
                        </p>
                        <p>
                            Đến Với DingDing - chơi thả ga - Không lo về giá
                            🌞🌞🌞
                        </p>
                    </div>

                    <div className="news__wrapper travelticket__wapper">
                        {travelTicket.map((travel, index) => (
                            <a
                                href={`/ve-tham-quan-du-lich/chi-tiet/idTravelTicket/${travel.idTravelTicket}`}
                                className="news__item"
                            >
                                <img
                                    src={travel.imageTravelTicket}
                                    alt=""
                                    className="news__image"
                                />
                                <div className="news__info">
                                    <div className="news__name">
                                        {travel.nameTravelTicket}
                                    </div>
                                    <div className="travelticket__price">
                                        {travel.priceTravelTicket
                                            .toString()
                                            .replace(
                                                /\B(?=(\d{3})+(?!\d))/g,
                                                ","
                                            )}
                                        đ
                                    </div>
                                    <div className="travelticket__desc-item">
                                        {parse(
                                            travel.contentTravelTicket.slice(
                                                0,
                                                140
                                            )
                                        )}
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default TravelTicket;
