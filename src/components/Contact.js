import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
    return (
        <section className="container introduce">
            <img
                src="https://images.unsplash.com/photo-1606801954050-be6b29588460?q=80&w=2180&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="introduce__image"
            />
            <div className="introduce__info">
                <div className="introduce__header">
                    <div className="introduce__header-desc">LIÊN HỆ</div>
                    <div className="introduce__header-title">
                        CÔNG TY TNHH TMDV DU LỊCH OCEAN
                    </div>
                    <div className="introduce__header-desc-yellow">
                        CHẠM VÀO CẢM XÚC
                    </div>
                </div>
                <div className="introduce__content">
                    <div className="introduce__content-top">LIÊN HỆ</div>
                    <div className="introduce__content-main">
                        <p>
                            Công ty TNHH TƯ VẤN VÀ CUNG ỨNG DING DING , viết tắt
                            là DingDing Travel, là công ty du lịch hàng đầu với
                            các tour chuyên nghiệp theo tiêu chuẩn quốc tế.
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

export default Contact;
