import { FaArrowRightLong } from "react-icons/fa6";

function Introduce() {
    return (
        <section className="container introduce">
            <img
                src="https://images.unsplash.com/photo-1606801954050-be6b29588460?q=80&w=2180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                        Công ty TNHH TƯ VẤN VÀ CUNG ỨNG DINGDING - Tên Tiếng
                        Anh: DINGDING SUPLY AND CONSULTING COMPANY LIMITED.
                    </div>
                    <div className="introduce__content-main">
                        <p>
                            Công ty TNHH TƯ VẤN VÀ CUNG ỨNG DING DING , viết tắt
                            là DingDing Travel, là công ty du lịch hàng đầu với
                            các tour chuyên nghiệp theo tiêu chuẩn quốc tế.
                        </p>
                        <p>
                            Ding Ding travel là công ty cung ứng dịch vụ về du
                            lịch lữ hành được thành lập năm 2016, trải qua hơn 7
                            năm phát triển, công ty không ngừng nỗ lực phát
                            triển và khẳng định vị trí thương hiệu không chỉ ở
                            phạm vi trong nước mà còn mở rộng ra thị trường quốc
                            tế.
                        </p>

                        <p>
                            Trong thị trường vô số các công ty du lịch đầy cạnh
                            tranh hiện nay DingDing Travel vẫn được đông đảo quý
                            khách hàng tin yêu lựa chọn nhờ tinh thần tận tâm,
                            chất lượng phục vụ được đặt lên hàng đầu, đa dạng
                            loại hình du lịch từ: du lịch trong nước, du lịch
                            nước ngoài, trải nghiệm học tập, nghỉ dưỡng cho đến
                            du lịch hành hương, du lịch được kết hợp cùng team
                            building, gala dinner,…
                        </p>
                    </div>
                </div>
                {/* <button className="button button-primary">
                    Xem Thêm <FaArrowRightLong />
                </button> */}
            </div>
        </section>
    );
}

export default Introduce;
