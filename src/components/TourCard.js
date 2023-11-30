import { IoTimeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";

function TourCard({ tourCard, newTours }) {
    return (
        <div className="card__item swiper-slide">
            <img src={tourCard.imageTour1} alt="" className="card__image" />
            <div className="card__info">
                <div className="card__name">{tourCard.nameTour}</div>
                <div className="card__location">
                    <div className="card__day">
                        <IoTimeOutline className="card__icon" />{" "}
                        {tourCard.dayTour}
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
                        Giá: <p>{tourCard.priceTour}</p>
                    </div>
                    <div className="card__more">
                        Chi Tiết <FaArrowRightLong className="card__icon" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TourCard;
