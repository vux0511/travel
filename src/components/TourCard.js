import { IoTimeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

function TourCard() {
    return (
        <Link to={"/detail-tour/id"}>
            <div className="card__item swiper-slide">
                <img
                    src="https://luxurytravel.vn/wp-content/uploads/2023/11/row-820x520.jpeg"
                    alt=""
                    className="card__image"
                />
                <div className="card__info">
                    <div className="card__name">
                        Tour Tết 2024 Du Lịch Châu Âu Anh – Xứ Wales
                    </div>
                    <div className="card__location">
                        <div className="card__day">
                            <IoTimeOutline className="card__icon" /> 5 ngày
                        </div>
                        <div className="card__rating">
                            <p>
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                                <GoStarFill />
                            </p>
                            5/5
                        </div>
                    </div>
                    <div className="card__bottom">
                        <div className="card__price">
                            Giá: <p>88.888.888đ</p>
                        </div>
                        <div className="card__more">
                            Chi Tiết <FaArrowRightLong className="card__icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default TourCard;
