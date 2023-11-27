import AboutImage from "../assets/AboutImage.jpeg";
import Brand from "./Brand";
import ChooseUs from "./ChooseUs";
import Introduce from "./Introduce";
import Vision from "./Vision";

function About() {
    return (
        <div className="wrapper">
            <img src={AboutImage} alt="Banner " className="visa__banner" />
            <Introduce />
            <ChooseUs />
            <Vision />
            <Brand />
            <div className="container">
                <div className="visa__item teambuilding__advise">
                    <img
                        src="https://images.unsplash.com/photo-1542637297-1318423100cf?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                        className="visa__image"
                    />
                    <div className="visa__info">
                        <div className="visa__item-title visa__line">
                            Tư Vấn Dịch Vụ Của DingDing
                        </div>
                        <div className="visa__item-desc">
                            DingDing Travel tự hào là công ty du lịch và lữ hành
                            chuyên cung cấp dịch vụ du lịch chất lượng hàng đầu
                            Việt Nam cũng như trên thế giới
                        </div>
                        <a
                            href="https://www.facebook.com/messages/t/1848020962149796"
                            target="_blank"
                            className="visa__button-advise"
                        >
                            <button className="visa__button">
                                Liên Hệ Tư Vấn
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
