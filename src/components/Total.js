import { FaAward, FaHandshake } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";

function Total() {
    return (
        <div className="wrapper wrapper__total">
            <section className="container total">
                <div className="total__item">
                    <FaAward className="total__icon" />
                    <div className="total__info">
                        <div className="total__data">20+</div>
                        <div className="total__title">GIẢI THƯỞNG DU LỊCH</div>
                    </div>
                </div>
                <div className="total__item">
                    <IoIosStarOutline className="total__icon" />
                    <div className="total__info">
                        <div className="total__data">20</div>
                        <div className="total__title">NĂM KINH NGHIỆM</div>
                    </div>
                </div>
                <div className="total__item">
                    <FaHandshake className="total__icon" />
                    <div className="total__info">
                        <div className="total__data">200+</div>
                        <div className="total__title">ĐỐI TÁC DU LỊCH</div>
                    </div>
                </div>
                <div className="total__item">
                    <HiOutlineUserGroup className="total__icon" />
                    <div className="total__info">
                        <div className="total__data">100+</div>
                        <div className="total__title">
                            KHÁCH SỬ DỤNG DỊCH VỤ
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Total;
