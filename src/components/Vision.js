import { TbTargetArrow } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { FaEye, FaAward } from "react-icons/fa";

function Vision() {
    return (
        <section className="container">
            <div className="tours__desc vision__top-desc">DINGDING TRAVEL</div>
            <div className="tours__header line">Định Vị Thương Hiệu</div>
            <div className="chooseus__text vision__text">
                DingDing Travel tự hào là công ty du lịch và lữ hành chuyên cung
                cấp dịch vụ du lịch chất lượng hàng đầu Việt Nam cũng như trên
                thế giới
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
                                Cung cấp cho khách hàng những dịch vụ chất lượng
                                nhất, những “WOW moment” tới khách hàng trong
                                những chuyến đi trải nghiệm. Quảng bá tinh hoa
                                truyền thống và bản sắc dân tộc, đóng góp tích
                                cực cho sự phát triển cho ngành du lịch Việt
                                Nam.
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
                                Giá trị cốt lõi của DingDing Travel nằm ở cam
                                kết mang lại trải nghiệm du lịch độc đáo và
                                không quên cho khách hàng. Là người bạn đồng
                                hành tận tâm, luôn lắng nghe và đáp ứng mọi mong
                                muốn của du khách.
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
                                Năm 2025 trở thành doanh nghiệp cung cấp dịch vụ
                                du lịch kết hợp học tập trải nghiệm, Fieltrip,
                                events và teambuilding cho khối ngành Giáo dục
                                đặc biệt là khối các trường Đại học, doanh
                                nghiệp giáo dục phạm vi trong và ngoài nước.
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
                                Chúng tôi, một công ty lữ hành đa dạng và phong
                                cách, tự hào với sứ mệnh đưa mọi người, đặc biệt
                                là cộng đồng Giáo Dục, đến gần những trải nghiệm
                                du lịch mới mẻ phong phú, đáp ứng đa dạng nhu
                                cầu của từng đối tượng khách hàng.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Vision;
