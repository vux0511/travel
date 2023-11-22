import { FaArrowRightLong } from "react-icons/fa6";

function Contact() {
    return (
        <div className="wrapper wrapper__contact">
            <div className="container contact">
                <div className="tours__desc contact__desc">ĐỪNG NGẠI</div>
                <div className="tours__header contact__title line">
                    Liên Hệ Với Chúng Tôi
                </div>
                {/* <div className="overlay"></div> */}
                <div className="contact__text">
                    Hãy để chúng tôi biến giấc mơ của bạn thành kỳ nghỉ tuyệt
                    vời nhất có thể. Tất cả đều miễn phí cho đến khi bạn hài
                    lòng với chương trình dự kiến do chúng tôi thiết kế cho bạn
                </div>
                <button className="button button-primary">
                    Liên Hệ <FaArrowRightLong />
                </button>
            </div>
        </div>
    );
}

export default Contact;
