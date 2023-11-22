import { IoTimeOutline } from "react-icons/io5";
import { GoStarFill } from "react-icons/go";
import { FiStar } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";

function TourCard() {
    return (
        <div className="tourcard">
            <img
                src="https://luxurytravel.vn/wp-content/uploads/2020/08/Hmong-ethnic-minority-children-on-September-20-2014-in-Mucangchai-1920x1282-1-820x520.jpg"
                alt=""
                className="tourcard__image"
            />
            <div className="tourcard__name">
                Tour Miền Cổ Tích Hà Nội - Mù Cang Chải - Ngọc Chiến
            </div>
            <div className="tourcard__location">
                <div className="tourcard__time">
                    <IoTimeOutline className="tourcard__icon" />
                    <p>3 ngày</p>
                </div>
                <div className="tourcard__rating">
                    <div className="star tourcard__icon">
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                        <GoStarFill />
                    </div>
                    <p>5/5</p>
                    {/* <FiStar /> */}
                </div>
            </div>
            <div className="tourcard__bottom">
                <div className="tourcard__price">
                    Giá: <span className="tourcard__total">55.555.555đ</span>
                </div>
                <a href="" className="tourcard__more">
                    <span>Chi Tiết</span>
                    <span>
                        <FaArrowRightLong className="tourcard__icon tourcard__icon-more" />
                    </span>
                </a>
            </div>
        </div>
    );
}

export default TourCard;
