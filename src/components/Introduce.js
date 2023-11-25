import { FaArrowRightLong } from "react-icons/fa6";

function Introduce() {
    return (
        <section className="container introduce">
            <img
                src="https://luxurytravel.vn/wp-content/uploads/2023/05/02-The-Anam-Staff-1024x883.jpg"
                alt=""
                className="introduce__image"
            />
            <div className="introduce__info">
                <div className="introduce__header">
                    <div className="introduce__header-desc">
                        GIỚI THIỆU VỀ CHÚNG TÔI
                    </div>
                    <div className="introduce__header-title">DingDing Tour</div>
                    <div className="introduce__header-desc-yellow">
                        CHẠM VÀO CẢM XÚC
                    </div>
                </div>
                <div className="introduce__content">
                    <div className="introduce__content-top">
                        DingDing Travel là một dựng danh tiếng vững chắc trong
                        suốt gần 10 năm hoạt động.
                    </div>
                    <div className="introduce__content-main">
                        <p>
                            Chúng tôi hoạt động đa dạng trong lĩnh vực vận tải,
                            du thuyền, du lịch, nhà hàng và khách sạn. DingDing
                            Travel tập trung vào việc cung cấp trải nghiệm sang
                            trọng và cá nhân hóa.
                        </p>
                        <p>
                            Chúng tôi tự hào mang đến các kỳ nghỉ độc đáo với
                            nhiều chủ đề khác nhau, tổ chức sự kiện cho doanh
                            nghiệp và cá nhân quan trọng, cũng như phục vụ những
                            người nổi tiếng trong nước và nhóm nhỏ những lữ
                            khách. Khám phá, thư giãn và tiếp xúc với di sản văn
                            hóa và thiên nhiên luôn là ưu tiên hàng đầu.
                        </p>

                        <p>
                            Chúng tôi cam kết mang đến trải nghiệm du lịch độc
                            đáo và đáng nhớ, luôn sáng tạo để chạm đến cảm xúc
                            của khách hàng và đảm bảo 100% hài lòng tuyệt đối.
                            Đội ngũ chuyên gia du lịch cao cấp của chúng tôi
                            luôn sẵn sàng tư vấn 24/7. Hãy liên hệ ngay để nhận
                            sự hỗ trợ tận tâm!
                        </p>
                    </div>
                </div>
                <button className="button button-primary">
                    Xem Thêm <FaArrowRightLong />
                </button>
            </div>
        </section>
    );
}

export default Introduce;
