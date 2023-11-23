import { TbTargetArrow } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaEye, FaAward } from "react-icons/fa";

function Vision() {
    return (
        <section className="container">
            <div className="tours__desc vision__top-desc">DINGDING TRAVEL</div>
            <div className="tours__header line">Định Vị Thương Hiệu</div>
            <div className="chooseus__text vision__text">
                Luxury Travel tự hào là công ty lữ hành chuyên cung cấp dịch vụ
                du lịch sang trọng hàng đầu Việt Nam và Châu Á, đã đoạt nhiều
                giải thưởng trong nước và quốc tế.
            </div>
            <div className="vision__wrapper">
                <div className="vision__items">
                    <img
                        src="https://images.unsplash.com/photo-1519293978507-9c6bb9f82eda?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Vision Image"
                        className="vision__image"
                    />
                </div>
                <div className="vision__items">
                    <div className="vision__item">
                        <div className="vision__icon">
                            <TbTargetArrow />
                        </div>
                        <div className="vision__info">
                            <div className="vision__title">SỨ MỆNH</div>
                            <div className="vision__desc">
                                Sứ mệnh của chúng tôi là đem lại trải nghiệm du
                                lịch cao cấp ở Việt Nam cũng như Đông Nam Á cho
                                toàn bộ khách hàng, nâng tầm du lịch Việt Nam
                                trên toàn cầu.
                            </div>
                        </div>
                    </div>
                    <div className="vision__item">
                        <div className="vision__icon">
                            <GiReceiveMoney />
                        </div>
                        <div className="vision__info">
                            <div className="vision__title">GIÁ TRỊ CỐT LÕI</div>
                            <div className="vision__desc">
                                Giá trị cốt lõi đối với Luxury Travel là khách
                                hàng. Chúng tôi làm việc hết sức để mang lại cảm
                                xúc "Wow" cho khách hàng sử dụng dịch vụ của
                                chúng tôi.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vision__items">
                    <div className="vision__item">
                        <div className="vision__icon">
                            <FaEye />
                        </div>
                        <div className="vision__info">
                            <div className="vision__title">TẦM NHÌN</div>
                            <div className="vision__desc">
                                Chúng tôi muốn phát triển thành công ty du lịch
                                cao cấp hàng đầu Việt Nam và châu Á dựa trên
                                kinh nghiệm gần 20 năm làm du lịch cao cấp ở
                                Việt Nam và Đông Nam Á.
                            </div>
                        </div>
                    </div>
                    <div className="vision__item">
                        <div className="vision__icon">
                            <FaAward />
                        </div>
                        <div className="vision__info">
                            <div className="vision__title">
                                ĐỊNH VỊ THƯƠNG HIỆU
                            </div>
                            <div className="vision__desc">
                                Chúng tôi định vị phân khúc khách hàng của mình
                                phục vụ là khách hàng cao cấp và chúng tôi tận
                                tâm để mang lại đúng giá trị mà khách hàng mong
                                đợi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vision;
